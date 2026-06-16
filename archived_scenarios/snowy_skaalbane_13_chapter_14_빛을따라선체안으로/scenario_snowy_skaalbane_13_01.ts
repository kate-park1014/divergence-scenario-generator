export const scenario_snowy_skaalbane_13_01 = {
	"scenario_id": "snowy_skaalbane_13_01",
	"order": 1,
	"act": "intro",
	"theme": "snowy",
	"actors": {
		"eira": {
			"id": "mon_0c37c014-b5ca-4f2f-ad03-5d393e5b2eb1",
			"name": {
				"korean": "에이라",
				"english": "Eira",
				"japanese": "エイラ",
				"chinese": "艾拉",
				"french": "Eira",
				"spanish": "Eira",
				"vietnamese": "Eira",
				"thai": "ไอรา",
				"hindi": "ऐरा"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8e2970b7-bcb1-4b1c-6bf0-93106b373500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/0ca1ec09-a624-450f-054a-b98de58bdb00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "잔해탑 내부. 차가운 공기가 폐부를 찔렀다.",
						"english": "Inside the Spire of Remnants. A cold air pierced my lungs.",
						"japanese": "残骸の塔内部。冷たい空気が肺を刺した。",
						"chinese": "残骸之塔内部。寒冷的空气刺入肺腑。",
						"french": "À l'intérieur de la Tour des Vestiges. L'air froid transperçait mes poumons.",
						"spanish": "Dentro de la Torre de los Escombros. Un aire gélido me perforaba los pulmones.",
						"vietnamese": "Bên trong Tháp Phế Tích. Không khí lạnh thấu xương.",
						"thai": "ภายในหอคอยซากปรักหักพัง อากาศที่หนาวเย็นเสียดแทงปอด",
						"hindi": "अवशेषों के बुर्ज के अंदर। ठंडी हवा फेफड़ों को भेद रही थी।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "…더 차가워졌어. 이 푸른 빛 때문인가?",
						"english": "...It's gotten colder. Is it because of this blue light?",
						"japanese": "…もっと冷たくなった。この青い光のせいかな？",
						"chinese": "……更冷了。是因为这蓝色的光吗？",
						"french": "...Il fait plus froid. Est-ce à cause de cette lumière bleue ?",
						"spanish": "...Se ha vuelto más frío. ¿Es por esta luz azul?",
						"vietnamese": "...Lạnh hơn rồi. Có phải vì ánh sáng xanh này không?",
						"thai": "...หนาวขึ้นอีกแล้ว เป็นเพราะแสงสีฟ้านี่หรือเปล่า?",
						"hindi": "...और ज़्यादा ठंडा हो गया है। क्या यह इस नीली रोशनी की वजह से है?"
					},
					"type": "speech"
				},
				{
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "eira"
				},
				{
					"type": "speech",
					"content": {
						"korean": "빛의 박동에 따라 한기가… 강해졌다 약해지네요.",
						"english": "The chill... it strengthens and weakens with the light's pulse.",
						"japanese": "光の鼓動に合わせて、寒気が…強くなったり弱くなったりしますね。",
						"chinese": "随着光的脉动，寒意……时强时弱。",
						"french": "Le froid... il s'intensifie et s'atténue avec le battement de la lumière.",
						"spanish": "El frío... se intensifica y se debilita con el pulso de la luz.",
						"vietnamese": "Theo nhịp đập của ánh sáng, cái lạnh... mạnh dần rồi lại yếu đi.",
						"thai": "ความเย็น... แรงขึ้นและอ่อนลงตามจังหวะของแสง",
						"hindi": "रोशनी की धड़कन के साथ, ठंड... बढ़ती और घटती है।"
					},
					"emotion": "base",
					"speaker": "eira"
				},
				{
					"emotion": "base",
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "벽의 룬들이 말하고 있어요. 이 길은 오직 빛을 향해서만 열린다고.",
						"english": "The runes on the walls are speaking. This path only opens towards the light.",
						"japanese": "壁のルーンが語っています。この道は、ただ光に向かってのみ開かれると。",
						"chinese": "墙上的符文在诉说。这条路只为光而开。",
						"french": "Les runes sur les murs parlent. Ce chemin ne s'ouvre que vers la lumière.",
						"spanish": "Las runas en las paredes hablan. Este camino solo se abre hacia la luz.",
						"vietnamese": "Các ký tự trên tường đang nói. Con đường này chỉ mở ra hướng về ánh sáng.",
						"thai": "อักษรรูนบนกำแพงกำลังบอกว่า เส้นทางนี้จะเปิดออกสู่แสงสว่างเท่านั้น",
						"hindi": "दीवारों पर बने रुन बता रहे हैं। यह रास्ता केवल प्रकाश की ओर ही खुलता है।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "다른 길은 전부 얼음으로 막혔어.",
						"english": "All other paths are blocked by ice.",
						"japanese": "他の道は全て氷で塞がれています。",
						"chinese": "其他的路都被冰堵住了。",
						"french": "Tous les autres chemins sont bloqués par la glace.",
						"spanish": "Todos los demás caminos están bloqueados por el hielo.",
						"vietnamese": "Tất cả các lối đi khác đều bị băng chặn lại.",
						"thai": "เส้นทางอื่น ๆ ทั้งหมดถูกปิดกั้นด้วยน้ำแข็ง",
						"hindi": "बाकी सभी रास्ते बर्फ़ से बंद हो गए हैं।"
					},
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"speaker": "eira",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "eira",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이 룬들은… 단순히 길을 안내하는 게 아니네요.",
						"english": "These runes... they're not just guiding the way.",
						"japanese": "これらのルーンは…ただ道を案内しているだけではないわね。",
						"chinese": "这些符文…不仅仅是引路。",
						"french": "Ces runes... elles ne se contentent pas d'indiquer le chemin.",
						"spanish": "Estas runas... no solo están guiando el camino.",
						"vietnamese": "Những dòng chữ này… không chỉ đơn thuần là chỉ đường.",
						"thai": "รูนพวกนี้... ไม่ได้แค่บอกทางสินะ",
						"hindi": "ये रुन्स... सिर्फ रास्ता नहीं दिखा रहे हैं।"
					}
				},
				{
					"content": {
						"korean": "그럼?",
						"english": "Then?",
						"japanese": "じゃあ？",
						"chinese": "那是什么？",
						"french": "Alors ?",
						"spanish": "¿Entonces?",
						"vietnamese": "Vậy thì sao?",
						"thai": "แล้วไง?",
						"hindi": "तो क्या?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "어떤 의지를 담고 있어요. 빛을 향해 나아가도록… 설계된 길이에요.",
						"english": "They hold some will. A path designed... to lead towards the light.",
						"japanese": "何かの意志を宿しているわ。光へと進むよう…設計された道よ。",
						"chinese": "它们承载着某种意志。一条指引向光…被设计的道路。",
						"french": "Elles contiennent une certaine volonté. Un chemin conçu... pour avancer vers la lumière.",
						"spanish": "Contienen una voluntad. Un camino diseñado... para avanzar hacia la luz.",
						"vietnamese": "Chúng chứa đựng một ý chí nào đó. Một con đường được thiết kế… để dẫn lối đến ánh sáng.",
						"thai": "พวกมันมีความตั้งใจบางอย่างอยู่ เป็นเส้นทางที่ถูกออกแบบมา... เพื่อนำไปสู่แสงสว่าง",
						"hindi": "इनमें कोई इच्छा समाई है। एक ऐसा रास्ता... जो रोशनी की ओर बढ़ने के लिए बना है।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "누가 이런 길을 만들었단 말이야?",
						"english": "Who would've made a path like this?",
						"japanese": "誰がこんな道を作ったっていうの？",
						"chinese": "到底是谁造了这样的路？",
						"french": "Qui diable a créé un chemin pareil ?",
						"spanish": "¿Quién habrá creado un camino así?",
						"vietnamese": "Ai đã tạo ra con đường này chứ?",
						"thai": "ใครกันนะที่สร้างทางแบบนี้?",
						"hindi": "भला किसने बनाया होगा ऐसा रास्ता?"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction",
					"speaker": "eira",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "룬의 내용이… 점점 더 어두워지고 있어요.",
						"english": "The runes' content... it's getting darker and darker.",
						"japanese": "ルーンの内容が…どんどん暗くなっているわ。",
						"chinese": "符文的内容…越来越阴暗了。",
						"french": "Le contenu des runes... devient de plus en plus sombre.",
						"spanish": "El contenido de las runas... se está volviendo cada vez más oscuro.",
						"vietnamese": "Nội dung của các dòng chữ… ngày càng u ám.",
						"thai": "เนื้อหาของรูน... เริ่มมืดมนขึ้นเรื่อยๆ แล้ว",
						"hindi": "रुन्स की बातें... और भी गहरी होती जा रही हैं।"
					},
					"type": "speech",
					"speaker": "eira",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "무슨 뜻이야?",
						"english": "What does it mean?",
						"japanese": "どういうこと？",
						"chinese": "什么意思？",
						"french": "Qu'est-ce que ça veut dire ?",
						"spanish": "¿Qué significa?",
						"vietnamese": "Ý của nó là gì?",
						"thai": "หมายความว่าไง?",
						"hindi": "इसका क्या मतलब है?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "갇혀버린 자들의 기록… 살기 위해 발버둥 치다… 결국 얼어붙은….",
						"english": "Records of those trapped... struggling to survive... eventually frozen...",
						"japanese": "閉じ込められた者たちの記録…生きるためにあがいた末…結局凍りついた…。",
						"chinese": "被困者的记录…为了生存而挣扎…最终被冻结…",
						"french": "Les récits de ceux qui furent piégés... luttant pour survivre... finalement figés...",
						"spanish": "Los registros de los atrapados... luchando por sobrevivir... finalmente congelados...",
						"vietnamese": "Ghi chép của những người bị mắc kẹt… vật lộn để sống sót… cuối cùng bị đông cứng…",
						"thai": "บันทึกของผู้ที่ถูกจองจำ... ดิ้นรนเพื่อเอาชีวิตรอด... สุดท้ายก็กลายเป็นน้ำแข็ง...",
						"hindi": "कैद हुए लोगों के दस्तावेज़... जीने के लिए तड़पते रहे... और आखिर में जम गए..."
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "…누군가가 죽었다는 거야?",
						"english": "...Does that mean someone died?",
						"japanese": "…誰かが死んだっていうの？",
						"chinese": "…是说有人死了吗？",
						"french": "...Ça veut dire que quelqu'un est mort ?",
						"spanish": "...¿Significa que alguien murió?",
						"vietnamese": "…Có phải ai đó đã chết rồi sao?",
						"thai": "...มีคนตายแล้วเหรอ?",
						"hindi": "...क्या इसका मतलब है कि कोई मर गया है?"
					},
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "eira",
					"spot": [
						3,
						2
					],
					"action": "enter"
				},
				{
					"speaker": "eira",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이곳은… 단순한 통로가 아니에요.",
						"english": "This place... it's not just a simple passage.",
						"japanese": "ここは…ただの通路じゃないわ。",
						"chinese": "这里…不是简单的通道。",
						"french": "Cet endroit... ce n'est pas qu'un simple passage.",
						"spanish": "Este lugar... no es solo un simple pasaje.",
						"vietnamese": "Nơi này… không chỉ là một lối đi đơn thuần.",
						"thai": "ที่นี่... ไม่ใช่แค่ทางเดินธรรมดา",
						"hindi": "ये जगह... सिर्फ एक रास्ता नहीं है।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "점점 더 깊어지는 것 같아.",
						"english": "It feels like it's getting deeper and deeper.",
						"japanese": "どんどん深くなっているみたい。",
						"chinese": "感觉越来越深了。",
						"french": "On dirait que ça s'enfonce de plus en plus.",
						"spanish": "Parece que se está volviendo cada vez más profundo.",
						"vietnamese": "Cảm giác như nó đang ngày càng sâu hơn.",
						"thai": "รู้สึกเหมือนมันลึกขึ้นเรื่อยๆ",
						"hindi": "ऐसा लगता है कि यह और गहरा होता जा रहा है।"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "룬은 경고하고 있어요. 이곳을 지나는 자들은… 돌아갈 수 없다고.",
						"english": "The runes warn. Those who pass this place... cannot return.",
						"japanese": "ルーンが警告している。ここを過ぎる者は…戻れないと。",
						"chinese": "符文在警告。穿越此地者…将无法返回。",
						"french": "Les runes avertissent. Ceux qui traversent cet endroit… ne peuvent pas revenir.",
						"spanish": "Las runas advierten. Aquellos que crucen este lugar… no podrán regresar.",
						"vietnamese": "Các rune cảnh báo. Những kẻ vượt qua nơi đây… sẽ không thể trở lại.",
						"thai": "รูนเตือนอยู่ ผู้ที่ผ่านที่นี่ไป…จะไม่อาจกลับมาได้",
						"hindi": "रून चेतावनी दे रहे हैं। जो इस जगह से गुज़रते हैं… लौट नहीं सकते।"
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "…그래도 가야 해. 빛의 근원을 봐야겠어.",
						"english": "…Even so, I must go. I need to see the source of the light.",
						"japanese": "…それでも行かなければ。光の根源を見なければならない。",
						"chinese": "…即使如此，我也必须去。我必须看到光的源头。",
						"french": "…Malgré tout, je dois y aller. Je dois voir la source de la lumière.",
						"spanish": "…Aun así, debo ir. Tengo que ver la fuente de la luz.",
						"vietnamese": "…Dù vậy, ta vẫn phải đi. Ta cần phải thấy nguồn gốc của ánh sáng.",
						"thai": "…ถึงอย่างนั้นก็ต้องไป ข้าต้องเห็นต้นกำเนิดของแสงนั้น",
						"hindi": "…फिर भी, मुझे जाना होगा। मुझे प्रकाश का स्रोत देखना है।"
					},
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"dialogue": [
				{
					"content": {
						"korean": "푸른 빛이 뿜어져 나오는 거대한 공간. 그 한가운데에 정체 모를 존재가 있었다.",
						"english": "A vast space where blue light emanated. In its center stood an unknown entity.",
						"japanese": "青い光が放たれる巨大な空間。その中央に、正体不明の存在がいた。",
						"chinese": "蓝光喷涌而出的巨大空间。其正中央，有一个身份不明的存在。",
						"french": "Un vaste espace d'où émanait une lumière bleue. Au centre, se tenait une entité inconnue.",
						"spanish": "Un espacio inmenso del que brotaba una luz azul. En su centro, había una entidad desconocida.",
						"vietnamese": "Một không gian rộng lớn tràn ngập ánh sáng xanh. Ở chính giữa, có một thực thể vô danh.",
						"thai": "พื้นที่กว้างใหญ่ที่แสงสีน้ำเงินพวยพุ่งออกมา ณ ใจกลางนั้นมีสิ่งมีชีวิตที่ไม่รู้จักอยู่",
						"hindi": "नीली रोशनी से जगमगाता एक विशाल स्थान। उसके केंद्र में एक अज्ञात सत्ता थी।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…온 자여. 너 또한 빛을 원하는가.",
						"english": "…O, newcomer. Do you also desire the light?",
						"japanese": "…来た者よ。お前もまた、光を望むのか。",
						"chinese": "…来者。你亦渴望光明吗？",
						"french": "…Ô, toi qui es venu. Désires-tu aussi la lumière ?",
						"spanish": "…Oh, recién llegado. ¿Tú también deseas la luz?",
						"vietnamese": "…Kẻ đến. Ngươi cũng khao khát ánh sáng sao?",
						"thai": "…ผู้มาเยือน เจ้าก็ต้องการแสงนั้นด้วยหรือ",
						"hindi": "…हे आगंतुक। क्या तुम भी प्रकाश चाहते हो?"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"type": "direction",
					"speaker": "eira",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"action": "enter"
				},
				{
					"speaker": "eira",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이 룬들… 이 존재는….",
						"english": "These runes… this entity…",
						"japanese": "このルーン…この存在は…。",
						"chinese": "这些符文…这个存在是…。",
						"french": "Ces runes… cette entité…",
						"spanish": "Estas runas… esta entidad…",
						"vietnamese": "Những rune này… thực thể này…",
						"thai": "รูนเหล่านี้… สิ่งมีชีวิตนี้…",
						"hindi": "ये रून… यह सत्ता…"
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "네가 이 모든 길을 만든 거야?",
						"english": "Did you create all these paths?",
						"japanese": "お前がこの全ての道を作ったのか？",
						"chinese": "这些道路都是你创造的吗？",
						"french": "C'est toi qui as créé tous ces chemins ?",
						"spanish": "¿Tú creaste todos estos caminos?",
						"vietnamese": "Ngươi đã tạo ra tất cả những con đường này sao?",
						"thai": "เจ้าเป็นคนสร้างทางเดินทั้งหมดนี้หรือ",
						"hindi": "क्या तुमने ये सारे रास्ते बनाए हैं?"
					},
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "차가운 얼음이 모든 것을 집어삼켰다.",
						"english": "Cold ice consumed all.",
						"japanese": "冷たい氷がすべてを飲み込んだ。",
						"chinese": "冰冷的寒意吞噬了一切。",
						"french": "La glace froide a tout englouti.",
						"spanish": "El hielo gélido lo devoró todo.",
						"vietnamese": "Băng giá lạnh lẽo nuốt chửng mọi thứ.",
						"thai": "น้ำแข็งอันเยือกเย็นได้กลืนกินทุกสิ่ง",
						"hindi": "ठंडी बर्फ ने सब कुछ निगल लिया।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "어리석은 자. 너 또한 이 빛의 일부가 될 뿐이다.",
						"english": "Fool. You too shall merely become part of this light.",
						"japanese": "愚か者め。お前もまた、この光の一部となるだけだ。",
						"chinese": "愚蠢之人。你也将成为这光芒的一部分。",
						"french": "Idiot. Toi aussi, tu ne seras qu'une partie de cette lumière.",
						"spanish": "Estúpido. Tú también serás solo una parte de esta luz.",
						"vietnamese": "Kẻ ngốc. Ngươi cũng sẽ chỉ là một phần của ánh sáng này.",
						"thai": "คนโง่เง่า. เจ้าก็จะเป็นเพียงส่วนหนึ่งของแสงนี้เท่านั้น.",
						"hindi": "मूर्ख। तुम भी इस प्रकाश का केवल एक अंश बनोगे।"
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…아직 끝나지 않았어. 포기하지 않아.",
						"english": "...It's not over yet. I won't give up.",
						"japanese": "…まだ終わってない。諦めない。",
						"chinese": "…还没结束。我不会放弃。",
						"french": "...Ce n'est pas encore fini. Je n'abandonnerai pas.",
						"spanish": "...Aún no ha terminado. No me rendiré.",
						"vietnamese": "...Chưa kết thúc đâu. Ta sẽ không bỏ cuộc.",
						"thai": "...ยังไม่จบ. ฉันไม่ยอมแพ้.",
						"hindi": "...अभी खत्म नहीं हुआ है। मैं हार नहीं मानूंगा।"
					},
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "…후회할 것이다. 빛은… 모든 것을 삼킬지니.",
						"english": "…You will regret this. The light… will consume all.",
						"japanese": "…後悔するだろう。光は…全てを飲み込むだろうから。",
						"chinese": "…你会后悔的。光…将吞噬一切。",
						"french": "…Tu le regretteras. La lumière… dévorera tout.",
						"spanish": "…Te arrepentirás. La luz… lo consumirá todo.",
						"vietnamese": "…Ngươi sẽ hối hận. Ánh sáng… sẽ nuốt chửng mọi thứ.",
						"thai": "…เจ้าจะเสียใจ แสงนั้น…จะกลืนกินทุกสิ่ง",
						"hindi": "…तुम्हें पछतावा होगा। प्रकाश… सब कुछ निगल जाएगा।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "무슨 소리야.",
						"english": "What do you mean?",
						"japanese": "どういうことだ。",
						"chinese": "什么意思。",
						"french": "Que veux-tu dire ?",
						"spanish": "¿Qué quieres decir?",
						"vietnamese": "Ngươi nói gì vậy?",
						"thai": "หมายความว่าอะไร",
						"hindi": "क्या मतलब है?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "룬이… 마지막 기록을 남기고 있어요. 이 빛은… 계속 이어질 거라고.",
						"english": "The runes… are leaving a final record. This light… will continue on.",
						"japanese": "ルーンが…最後の記録を残している。この光は…続いていくと。",
						"chinese": "符文…正在留下最后的记录。这光…将继续存在。",
						"french": "Les runes… laissent une dernière trace. Cette lumière… continuera.",
						"spanish": "Las runas… están dejando un último registro. Esta luz… continuará.",
						"vietnamese": "Các rune… đang để lại ghi chép cuối cùng. Ánh sáng này… sẽ tiếp tục kéo dài.",
						"thai": "รูน…กำลังทิ้งบันทึกสุดท้ายไว้ แสงนี้…จะยังคงอยู่",
						"hindi": "रून… अंतिम रिकॉर्ड छोड़ रहे हैं। यह प्रकाश… जारी रहेगा।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "eira"
				},
				{
					"type": "speech",
					"content": {
						"korean": "쓰러진 정체 모를 존재. 그러나 푸른 빛은 여전히 통로 끝에서 기다리고 있었다.",
						"english": "The unknown entity fell. Yet, the blue light still waited at the end of the passage.",
						"japanese": "倒れた正体不明の存在。しかし、青い光は依然として通路の終点で待っていた。",
						"chinese": "倒下的身份不明的存在。然而，蓝光仍在通道尽头等待着。",
						"french": "L'entité inconnue s'est effondrée. Pourtant, la lumière bleue attendait toujours au bout du passage.",
						"spanish": "La entidad desconocida cayó. Sin embargo, la luz azul seguía esperando al final del pasaje.",
						"vietnamese": "Thực thể vô danh đã ngã xuống. Thế nhưng, ánh sáng xanh vẫn chờ đợi ở cuối hành lang.",
						"thai": "สิ่งมีชีวิตที่ไม่รู้จักล้มลง แต่แสงสีน้ำเงินก็ยังคงรออยู่ที่ปลายทางเดิน",
						"hindi": "अज्ञात सत्ता गिर गई। फिर भी, नीली रोशनी मार्ग के अंत में प्रतीक्षा कर रही थी।"
					},
					"emotion": "base",
					"speaker": "narrator"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"잔해탑 내부. 차가운 공기가 폐부를 찔렀다.",
			"푸른 빛이 통로를 따라 희미하게 일렁였다.",
			"그 빛을 향해, 에이라는 조용히 발걸음을 옮겼다.",
			"벽에 새겨진 잊힌 룬들이, 어두운 비밀을 품고 있었다.",
			"우리는 오직 빛을 향해 나아갈 뿐이었다."
		],
		"english": [
			"Inside the Spire of Remnants. A cold air pierced my lungs.",
			"A faint blue light flickered along the passage.",
			"Towards that light, Aira quietly stepped forward.",
			"Forgotten runes carved into the walls held dark secrets.",
			"We could only advance towards the light."
		],
		"japanese": [
			"残骸の塔内部。冷たい空気が肺を刺した。",
			"青い光が通路に沿ってぼんやりと揺らめいた。",
			"その光に向かい、アイラは静かに足を進めた。",
			"壁に刻まれた忘れられたルーンが、暗い秘密を抱えていた。",
			"我々はただ光に向かって進むだけだった。"
		],
		"chinese": [
			"残骸之塔内部。寒冷的空气刺入肺腑。",
			"蓝色的光芒沿着通道微弱地闪烁。",
			"艾拉悄然迈步，朝着那光芒走去。",
			"墙壁上刻着的被遗忘的符文，蕴藏着黑暗的秘密。",
			"我们只能朝着光亮前进。"
		],
		"french": [
			"À l'intérieur de la Tour des Vestiges. L'air froid transperçait mes poumons.",
			"Une faible lumière bleue vacillait le long du passage.",
			"Vers cette lumière, Aira avança silencieusement.",
			"Des runes oubliées gravées sur les murs recelaient de sombres secrets.",
			"Nous ne pouvions qu'avancer vers la lumière."
		],
		"spanish": [
			"Dentro de la Torre de los Escombros. Un aire gélido me perforaba los pulmones.",
			"Una tenue luz azul parpadeaba a lo largo del pasillo.",
			"Hacia esa luz, Aira avanzó en silencio.",
			"Las runas olvidadas grabadas en las paredes guardaban oscuros secretos.",
			"Solo podíamos avanzar hacia la luz."
		],
		"vietnamese": [
			"Bên trong Tháp Phế Tích. Không khí lạnh thấu xương.",
			"Ánh sáng xanh mờ ảo nhấp nháy dọc theo lối đi.",
			"Hướng về phía ánh sáng đó, Aira lặng lẽ bước đi.",
			"Những ký tự cổ xưa khắc trên tường, ẩn chứa bí mật đen tối.",
			"Chúng ta chỉ có thể tiến về phía ánh sáng."
		],
		"thai": [
			"ภายในหอคอยซากปรักหักพัง อากาศที่หนาวเย็นเสียดแทงปอด",
			"แสงสีฟ้าอ่อนๆ สั่นไหวริบหรี่ไปตามทางเดิน",
			"ไอร่าก้าวเดินอย่างเงียบงัน มุ่งหน้าสู่แสงนั้น",
			"อักษรรูนที่ถูกลืมซึ่งแกะสลักอยู่บนกำแพงนั้นซ่อนความลับอันมืดมิด",
			"เราทำได้เพียงมุ่งหน้าสู่แสงสว่าง"
		],
		"hindi": [
			"अवशेषों के बुर्ज के अंदर। ठंडी हवा फेफड़ों को भेद रही थी।",
			"एक हल्की नीली रोशनी गलियारे में टिमटिमा रही थी।",
			"उस रोशनी की ओर, ऐरा ने चुपचाप कदम बढ़ाए।",
			"दीवारों पर खुदे हुए भूले हुए रुन गहरे राज़ समेटे हुए थे।",
			"हम केवल प्रकाश की ओर बढ़ सकते थे।"
		]
	}
} as const;
