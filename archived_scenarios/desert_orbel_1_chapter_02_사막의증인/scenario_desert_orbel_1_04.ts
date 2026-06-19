export const scenario_desert_orbel_1_04 = {
	"scenario_id": "desert_orbel_1_04",
	"order": 4,
	"act": "rising",
	"theme": "desert",
	"actors": {
		"amir": {
			"id": "mon_0096d602-52ab-4a9c-9cc8-4ff18ed3b655",
			"name": {
				"korean": "아미르",
				"english": "Amir",
				"japanese": "アミール",
				"chinese": "阿米尔",
				"french": "Amir",
				"spanish": "Amir",
				"vietnamese": "Amir",
				"thai": "อาเมียร์",
				"hindi": "अमीर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8cd60fb0-3699-44c4-6425-a3e97eec1800/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/b644dc95-9c27-442e-6dc6-73e5550a0200/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "거대한 오르벨의 존재 앞, 아미르가 다시 섰다.",
						"english": "Before the colossal presence of Orvel, Amir stood once more.",
						"japanese": "巨大なオルベルの存在を前に、アミールは再び立ち向かった。",
						"chinese": "在奥尔贝巨大的存在面前，阿米尔再次站立。",
						"french": "Devant la présence colossale d'Orvel, Amir se tint à nouveau.",
						"spanish": "Ante la colosal presencia de Orvel, Amir se irguió de nuevo.",
						"vietnamese": "Trước sự hiện diện khổng lồ của Orvel, Amir lại một lần nữa đứng đó.",
						"thai": "เบื้องหน้าออร์เวลผู้ยิ่งใหญ่ อามีร์ยืนขึ้นอีกครั้ง",
						"hindi": "ओर्वेल की विशाल उपस्थिति के सामने, अमीर फिर से खड़ा हो गया।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						5,
						2
					],
					"action": "enter",
					"speaker": "amir"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…이 비어있는 얼굴. 그리고 이 나선형 문양.",
						"english": "...This empty face. And this spiral pattern.",
						"japanese": "…この虚ろな顔。そしてこの螺旋の文様。",
						"chinese": "……这张空洞的脸。以及这个螺旋图案。",
						"french": "...Ce visage vide. Et ce motif en spirale.",
						"spanish": "...Este rostro vacío. Y este patrón en espiral.",
						"vietnamese": "…Khuôn mặt trống rỗng này. Và hoa văn xoắn ốc này.",
						"thai": "…ใบหน้าที่ว่างเปล่านี้ และลวดลายเกลียวนี้",
						"hindi": "...यह खाली चेहरा। और यह सर्पिल पैटर्न।"
					},
					"emotion": "base",
					"speaker": "amir"
				},
				{
					"content": {
						"korean": "정말 아무것도 없는 건가.",
						"english": "Is there truly nothing?",
						"japanese": "本当に何もないのか。",
						"chinese": "真的什么都没有吗？",
						"french": "N'y a-t-il vraiment rien ?",
						"spanish": "¿No hay realmente nada?",
						"vietnamese": "Thật sự không có gì sao?",
						"thai": "ไม่มีอะไรเลยเหรอ",
						"hindi": "क्या सच में कुछ भी नहीं है?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "amir",
					"type": "speech",
					"content": {
						"korean": "아니. 회전하고 있어. 아주 느리게.",
						"english": "No. It's turning. Very slowly.",
						"japanese": "いや。回転している。とてもゆっくりと。",
						"chinese": "不。它在旋转。非常缓慢地。",
						"french": "Non. Ça tourne. Très lentement.",
						"spanish": "No. Está girando. Muy lentamente.",
						"vietnamese": "Không. Nó đang xoay. Rất chậm.",
						"thai": "ไม่ มันกำลังหมุน ช้ามาก",
						"hindi": "नहीं। यह घूम रहा है। बहुत धीरे।"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						5,
						2
					],
					"action": "enter",
					"speaker": "amir"
				},
				{
					"emotion": "base",
					"speaker": "amir",
					"type": "speech",
					"content": {
						"korean": "이 문양은 단순한 패턴이 아니야.",
						"english": "This pattern isn't just a simple design.",
						"japanese": "この文様は、ただのパターンじゃない。",
						"chinese": "这个图案不只是一个简单的花纹。",
						"french": "Ce motif n'est pas qu'un simple dessin.",
						"spanish": "Este patrón no es solo un diseño simple.",
						"vietnamese": "Hoa văn này không phải là một kiểu thiết kế đơn giản.",
						"thai": "ลวดลายนี้ไม่ใช่แค่การออกแบบธรรมดา",
						"hindi": "यह पैटर्न सिर्फ एक साधारण डिज़ाइन नहीं है।"
					}
				},
				{
					"content": {
						"korean": "그냥 무늬처럼 보이는데.",
						"english": "It just looks like a pattern, though.",
						"japanese": "ただの模様に見えるけど。",
						"chinese": "但它看起来只是一个图案。",
						"french": "Pourtant, ça ressemble juste à un motif.",
						"spanish": "Aunque parece solo un patrón.",
						"vietnamese": "Nhưng trông nó chỉ như một hoa văn thôi.",
						"thai": "แต่ดูเหมือนจะเป็นแค่ลวดลาย",
						"hindi": "हालांकि, यह सिर्फ एक पैटर्न जैसा दिखता है।"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "amir",
					"emotion": "base",
					"content": {
						"korean": "시간의 흐름… 순환… 모든 것의 시작과 끝이 담겨있어.",
						"english": "Flow of time... cycle... contains the beginning and end of everything.",
						"japanese": "時間の流れ… 循環… 全ての始まりと終わりが込められている。",
						"chinese": "时间的流逝……循环……包含着万物的始与终。",
						"french": "Le flux du temps... le cycle... contient le début et la fin de tout.",
						"spanish": "El flujo del tiempo... el ciclo... contiene el principio y el fin de todo.",
						"vietnamese": "Dòng chảy thời gian... tuần hoàn... chứa đựng khởi đầu và kết thúc của vạn vật.",
						"thai": "กระแสแห่งกาลเวลา... วัฏจักร... บรรจุไว้ซึ่งจุดเริ่มต้นและจุดสิ้นสุดของทุกสรรพสิ่ง",
						"hindi": "समय का प्रवाह... चक्र... हर चीज़ की शुरुआत और अंत इसमें समाहित है।"
					},
					"type": "speech"
				},
				{
					"speaker": "amir",
					"emotion": "base",
					"content": {
						"korean": "마치 사막의 모든 역사가 압축된 듯한.",
						"english": "As if all history of the desert is compressed within.",
						"japanese": "まるで砂漠の全ての歴史が凝縮されているかのようだ。",
						"chinese": "仿佛浓缩了沙漠的所有历史。",
						"french": "Comme si toute l'histoire du désert y était comprimée.",
						"spanish": "Como si toda la historia del desierto estuviera comprimida en él.",
						"vietnamese": "Cứ như thể toàn bộ lịch sử của sa mạc được cô đọng lại vậy.",
						"thai": "ราวกับว่าประวัติศาสตร์ทั้งหมดของทะเลทรายถูกบีบอัดอยู่ภายใน",
						"hindi": "मानो रेगिस्तान का सारा इतिहास इसमें सिमट गया हो।"
					},
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "amir",
					"action": "enter",
					"spot": [
						5,
						2
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "생성… 그리고 소멸. 이 사막의 모든 것이 이 나선 안에 있어.",
						"english": "Creation... and destruction. Everything in this desert lies within this spiral.",
						"japanese": "生成… そして消滅。この砂漠の全てがこの螺旋の中にある。",
						"chinese": "创造……与毁灭。这片沙漠的一切都在这个螺旋之中。",
						"french": "Création... et destruction. Tout dans ce désert se trouve à l'intérieur de cette spirale.",
						"spanish": "Creación... y destrucción. Todo en este desierto yace dentro de esta espiral.",
						"vietnamese": "Tạo thành... rồi hủy diệt. Tất cả mọi thứ của sa mạc này đều nằm trong vòng xoắn ốc này.",
						"thai": "การกำเนิด... และการดับสูญ ทุกสิ่งในทะเลทรายนี้อยู่ในเกลียวแห่งนี้",
						"hindi": "उत्पत्ति... और विनाश। इस रेगिस्तान का सब कुछ इस सर्पिल में समाया हुआ है।"
					},
					"type": "speech",
					"speaker": "amir",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "오르벨이 그걸 다 지켜보고 있다는 거야?",
						"english": "Orvel is watching all of it?",
						"japanese": "オルベルが全てを見守っているってことか？",
						"chinese": "奥尔维尔都在看着这一切吗？",
						"french": "Orvel observe tout ça ?",
						"spanish": "¿Orvel está observando todo eso?",
						"vietnamese": "Orvel đang quan sát tất cả những điều đó sao?",
						"thai": "ออร์เวลกำลังเฝ้าดูทั้งหมดนั้นอยู่หรือ?",
						"hindi": "क्या ऑर्बेल यह सब देख रहा है?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그 이상이야. 이 사막의 의지 그 자체일지도 몰라.",
						"english": "More than that. It might be the very will of this desert.",
						"japanese": "それ以上だ。この砂漠の意志そのものかもしれない。",
						"chinese": "不止如此。它可能就是这片沙漠的意志本身。",
						"french": "Plus que ça. C'est peut-être la volonté même de ce désert.",
						"spanish": "Más que eso. Podría ser la voluntad misma de este desierto.",
						"vietnamese": "Hơn thế nữa. Nó có thể là ý chí của chính sa mạc này.",
						"thai": "ยิ่งกว่านั้นอีก อาจจะเป็นเจตจำนงของทะเลทรายนี้เอง",
						"hindi": "उससे भी ज़्यादा। यह इस रेगिस्तान की इच्छाशक्ति ही हो सकती है।"
					},
					"emotion": "base",
					"speaker": "amir"
				},
				{
					"type": "speech",
					"content": {
						"korean": "우리의 시도를… 침묵으로 응시하고 있어.",
						"english": "It gazes at our attempts... in silence.",
						"japanese": "我々の試みを… 沈黙で見つめている。",
						"chinese": "它以沉默……凝视着我们的尝试。",
						"french": "Il contemple nos tentatives... en silence.",
						"spanish": "Observa nuestros intentos... en silencio.",
						"vietnamese": "Nó đang nhìn chằm chằm vào nỗ lực của chúng ta... trong im lặng.",
						"thai": "มันจ้องมองความพยายามของเรา... ด้วยความเงียบงัน",
						"hindi": "यह हमारे प्रयासों को... खामोशी से देख रहा है।"
					},
					"emotion": "base",
					"speaker": "amir"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "amir",
					"action": "enter",
					"spot": [
						5,
						2
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "우리의 노력을… 오르벨은 어떻게 평가하고 있을까.",
						"english": "How does Orvel evaluate our efforts?",
						"japanese": "我々の努力を… オルベルはどう評価しているのだろうか。",
						"chinese": "奥尔维尔会如何评价我们的努力？",
						"french": "Comment Orvel évalue-t-il nos efforts ?",
						"spanish": "¿Cómo evalúa Orvel nuestros esfuerzos?",
						"vietnamese": "Orvel sẽ đánh giá nỗ lực của chúng ta như thế nào nhỉ?",
						"thai": "ออร์เวลจะประเมินความพยายามของเราอย่างไรบ้างนะ",
						"hindi": "ऑर्बेल हमारे प्रयासों का मूल्यांकन कैसे करेगा?"
					},
					"emotion": "base",
					"speaker": "amir"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "저 침묵 속에서 뭘 알 수 있어?",
						"english": "What can we learn from that silence?",
						"japanese": "あの沈黙の中で何が分かるんだ？",
						"chinese": "从那片沉默中我们能知道些什么？",
						"french": "Que peut-on apprendre de ce silence ?",
						"spanish": "¿Qué podemos aprender de ese silencio?",
						"vietnamese": "Chúng ta có thể biết được gì từ sự im lặng đó?",
						"thai": "เราจะรู้อะไรได้จากความเงียบงันนั้นบ้าง?",
						"hindi": "उस खामोशी से क्या पता चलेगा?"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "amir",
					"type": "speech",
					"content": {
						"korean": "…침묵도 답이야. 우리의 방향이 틀리지 않았다는 증거일 수도.",
						"english": "...Silence is also an answer. It could be proof that our direction isn't wrong.",
						"japanese": "…沈黙も答えだ。我々の方向が間違っていない証拠かもしれない。",
						"chinese": "……沉默也是一种答案。它可能是我们方向没有错的证据。",
						"french": "...Le silence est aussi une réponse. C'est peut-être la preuve que notre direction n'est pas erronée.",
						"spanish": "...El silencio también es una respuesta. Podría ser la prueba de que nuestra dirección no es errónea.",
						"vietnamese": "...Im lặng cũng là một câu trả lời. Có thể đó là bằng chứng cho thấy hướng đi của chúng ta không sai.",
						"thai": "...ความเงียบก็เป็นคำตอบ อาจเป็นหลักฐานว่าทิศทางของเราไม่ผิด",
						"hindi": "...खामोशी भी एक जवाब है। यह इस बात का सबूत हो सकता है कि हमारी दिशा गलत नहीं है।"
					}
				},
				{
					"content": {
						"korean": "무의미한 시도들… 모래는 모든 것을 삼킨다.",
						"english": "Meaningless attempts... the sand swallows everything.",
						"japanese": "無意味な試み… 砂は全てを飲み込む。",
						"chinese": "毫无意义的尝试……沙子吞噬一切。",
						"french": "Tentatives vaines... le sable engloutit tout.",
						"spanish": "Intentos inútiles... la arena lo traga todo.",
						"vietnamese": "Những nỗ lực vô nghĩa... cát nuốt chửng mọi thứ.",
						"thai": "ความพยายามที่ไร้ความหมาย... ทรายกลืนกินทุกสิ่ง",
						"hindi": "व्यर्थ के प्रयास... रेत सब कुछ निगल जाती है।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "누구냐!",
						"english": "Who goes there!",
						"japanese": "「誰だ！」",
						"chinese": "“你是谁！”",
						"french": "“Qui va là !”",
						"spanish": "“¡Quién anda ahí!”",
						"vietnamese": "“Ngươi là ai!”",
						"thai": "“ใครน่ะ!”",
						"hindi": "“कौन है!”"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "나는 그저, 사막의 순리를 따를 뿐이다.",
						"english": "I merely follow the desert's decree.",
						"japanese": "「私はただ、砂漠の摂理に従うのみ。」",
						"chinese": "“我只是顺从沙漠的法则。”",
						"french": "“Je ne fais que suivre l'ordre du désert.”",
						"spanish": "“Solo sigo el orden natural del desierto.”",
						"vietnamese": "“Ta chỉ tuân theo quy luật của sa mạc.”",
						"thai": "“ข้าเพียงแค่ปฏิบัติตามกฎของทะเลทราย”",
						"hindi": "“मैं तो बस रेगिस्तान के नियम का पालन करता हूँ।”"
					},
					"emotion": "base",
					"speaker": "random_boss"
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "…흐름은 계속될 뿐… 너희의 시간도….",
						"english": "...The flow merely continues... and so does your time...",
						"japanese": "「…流れは続くのみ…お前たちの時間も…。」",
						"chinese": "“...潮流仍将继续...你们的时间也亦然…”",
						"french": "“...Le courant ne fait que continuer... votre temps aussi...”",
						"spanish": "“...El flujo simplemente continúa... y vuestro tiempo también...”",
						"vietnamese": "“...Dòng chảy vẫn tiếp diễn... thời gian của các ngươi cũng vậy...”",
						"thai": "“...กระแสจะดำเนินต่อไปเท่านั้น... เวลาของพวกเจ้าก็เช่นกัน...”",
						"hindi": "“...प्रवाह बस जारी रहेगा... तुम्हारा समय भी...”"
					}
				},
				{
					"emotion": "base",
					"speaker": "amir",
					"type": "speech",
					"content": {
						"korean": "끝이 아니었어. 아직 오르벨의 깊은 의미가 남았어.",
						"english": "It wasn't over. Orvel's deeper meaning still remains.",
						"japanese": "「終わりではなかった。まだオルベルの深い意味が残っている。」",
						"chinese": "“这不是结束。奥尔维尔的深层含义仍未揭示。”",
						"french": "“Ce n'était pas la fin. Le sens profond d'Orvel demeure encore.”",
						"spanish": "“No era el final. El significado profundo de Orvel aún persiste.”",
						"vietnamese": "“Vẫn chưa kết thúc. Ý nghĩa sâu xa của Orvel vẫn còn đó.”",
						"thai": "“ยังไม่จบ ความหมายอันลึกซึ้งของออร์เวลยังคงอยู่”",
						"hindi": "“यह अंत नहीं था। ओरवेल का गहरा अर्थ अभी बाकी है।”"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "쓰러진 존재 뒤로, 오르벨의 나선형 문양은 여전히 침묵하며 회전하고 있었다.",
						"english": "Behind the fallen being, Orvel's spiral emblem still rotated in silence.",
						"japanese": "「倒れた存在の背後で、オルベルの螺旋模様は依然として沈黙しながら回転していた。」",
						"chinese": "“倒下的存在身后，奥尔维尔的螺旋纹样仍在沉默地旋转。”",
						"french": "“Derrière l'être tombé, l'emblème spiralé d'Orvel tournait toujours en silence.”",
						"spanish": "“Detrás del ser caído, el emblema espiral de Orvel seguía girando en silencio.”",
						"vietnamese": "“Sau lưng thực thể đã ngã xuống, hoa văn xoắn ốc của Orvel vẫn lặng lẽ xoay tròn.”",
						"thai": "“เบื้องหลังร่างที่ล้มลง ลวดลายเกลียวของออร์เวลยังคงหมุนอย่างเงียบงัน”",
						"hindi": "“गिरे हुए प्राणी के पीछे, ओरवेल का सर्पिल प्रतीक अभी भी चुपचाप घूम रहा था।”"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "진정한 시험은… 아직 시작되지 않았다.",
						"english": "The true trial... has yet to begin.",
						"japanese": "「真の試練は…まだ始まっていない。」",
						"chinese": "“真正的考验…尚未开始。”",
						"french": "“Le véritable défi... n'a pas encore commencé.”",
						"spanish": "“La verdadera prueba... aún no ha comenzado.”",
						"vietnamese": "“Thử thách thực sự... vẫn chưa bắt đầu.”",
						"thai": "“การทดสอบที่แท้จริง... ยังไม่เริ่มต้นขึ้น”",
						"hindi": "“असली परीक्षा... अभी शुरू नहीं हुई है।”"
					}
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "너희의 시도는 무용하다. 사막은 변하지 않아.",
						"english": "Your attempts are futile. The desert remains unchanged.",
						"japanese": "「お前たちの試みは無益だ。砂漠は変わらない。」",
						"chinese": "“你们的尝试是徒劳的。沙漠不会改变。”",
						"french": "“Vos tentatives sont vaines. Le désert ne change pas.”",
						"spanish": "“Vuestros intentos son inútiles. El desierto no cambia.”",
						"vietnamese": "“Nỗ lực của các ngươi vô ích thôi. Sa mạc không thay đổi đâu.”",
						"thai": "“ความพยายามของพวกเจ้าไร้ประโยชน์ ทะเลทรายไม่มีวันเปลี่ยนไป”",
						"hindi": "“तुम्हारे प्रयास व्यर्थ हैं। रेगिस्तान नहीं बदलता।”"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "모든 것은 결국 모래가 될 뿐.",
						"english": "All things eventually turn to sand.",
						"japanese": "「全ては結局、砂となるだけだ。」",
						"chinese": "“一切终将化为沙尘。”",
						"french": "“Tout finira par n'être que sable.”",
						"spanish": "“Todo acaba por convertirse en arena.”",
						"vietnamese": "“Mọi thứ rồi sẽ hóa thành cát bụi mà thôi.”",
						"thai": "“ทุกสิ่งล้วนกลายเป็นทรายในที่สุด”",
						"hindi": "“अंततः सब कुछ रेत बन जाएगा।”"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "우리는 증명할 거야. 생명은 반드시 피어난다고.",
						"english": "We will prove it. Life will surely bloom.",
						"japanese": "「私たちは証明する。生命は必ず芽吹くと。」",
						"chinese": "“我们会证明的。生命必将绽放。”",
						"french": "“Nous le prouverons. La vie finira par éclore.”",
						"spanish": "“Lo demostraremos. La vida florecerá.”",
						"vietnamese": "“Chúng ta sẽ chứng minh. Sự sống nhất định sẽ nở rộ.”",
						"thai": "“เราจะพิสูจน์ให้เห็นว่าชีวิตย่อมเบ่งบานเสมอ”",
						"hindi": "“हम साबित करेंगे। जीवन अवश्य खिलेगा।”"
					},
					"type": "speech",
					"speaker": "amir",
					"emotion": "angry"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "모든 것은 모래로 돌아간다. 너희의 시도도.",
						"english": "All things return to sand. Your attempts too.",
						"japanese": "「全ては砂に戻る。お前たちの試みもまた。」",
						"chinese": "“一切都将归于沙尘。你们的尝试也一样。”",
						"french": "“Tout retourne au sable. Vos tentatives aussi.”",
						"spanish": "“Todo vuelve a la arena. Vuestros intentos también.”",
						"vietnamese": "“Mọi thứ đều trở về cát bụi. Nỗ lực của các ngươi cũng vậy.”",
						"thai": "“ทุกสิ่งล้วนกลับคืนสู่ทราย รวมถึงความพยายามของพวกเจ้าด้วย”",
						"hindi": "“सब कुछ रेत में बदल जाता है। तुम्हारे प्रयास भी।”"
					},
					"type": "speech"
				},
				{
					"speaker": "amir",
					"emotion": "angry",
					"content": {
						"korean": "아직 끝나지 않았어. 우리는 포기하지 않아.",
						"english": "It's not over yet. We won't give up.",
						"japanese": "まだ終わってない。私たちは諦めない。",
						"chinese": "还没结束。我们不会放弃。",
						"french": "Ce n'est pas encore fini. Nous n'abandonnerons pas.",
						"spanish": "Aún no ha terminado. No nos rendiremos.",
						"vietnamese": "Chưa kết thúc đâu. Chúng ta sẽ không bỏ cuộc.",
						"thai": "ยังไม่จบแค่นี้ เราไม่ยอมแพ้หรอก",
						"hindi": "यह अभी खत्म नहीं हुआ है। हम हार नहीं मानेंगे।"
					},
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"사막의 심장, 오르벨의 눈동자.",
			"그 비어있는 얼굴 위, 나선형 문양이 회전한다.",
			"시간의 흐름, 모든 것의 생성과 소멸.",
			"침묵하는 시선 속에서, 우리는 무엇을 읽어낼 수 있을까."
		],
		"english": [
			"Heart of the desert, eye of Orvel.",
			"Upon its empty face, a spiral pattern turns.",
			"The flow of time, the birth and demise of all.",
			"In its silent gaze, what can we decipher?"
		],
		"japanese": [
			"砂漠の心臓、オルベルの瞳。",
			"その虚ろな顔の上に、螺旋の文様が回転する。",
			"時間の流れ、万物の生成と消滅。",
			"沈黙する視線の中で、我々は何を読み取れるだろうか。"
		],
		"chinese": [
			"沙漠之心，奥尔贝之眼。",
			"在其空洞的脸上，螺旋图案缓缓旋转。",
			"时间的流逝，万物的生成与消灭。",
			"在它沉默的目光中，我们能读懂什么？"
		],
		"french": [
			"Cœur du désert, œil d'Orvel.",
			"Sur son visage vide, un motif en spirale tourne.",
			"Le flux du temps, la genèse et la fin de toute chose.",
			"Dans son regard silencieux, que pouvons-nous déchiffrer ?"
		],
		"spanish": [
			"Corazón del desierto, ojo de Orvel.",
			"Sobre su rostro vacío, un patrón en espiral gira.",
			"El fluir del tiempo, la creación y desaparición de todo.",
			"En su mirada silenciosa, ¿qué podemos descifrar?"
		],
		"vietnamese": [
			"Trái tim sa mạc, con mắt Orvel.",
			"Trên khuôn mặt trống rỗng, một hoa văn xoắn ốc xoay tròn.",
			"Dòng chảy thời gian, sự sinh thành và diệt vong của vạn vật.",
			"Trong ánh nhìn im lặng ấy, ta có thể đọc được điều gì?"
		],
		"thai": [
			"หัวใจแห่งทะเลทราย ดวงตาแห่งออร์เวล",
			"บนใบหน้าที่ว่างเปล่า ลวดลายเกลียวหมุนวน",
			"กระแสแห่งกาลเวลา การเกิดและการดับสิ้นของสรรพสิ่ง",
			"ภายใต้สายตาอันเงียบงัน เราจะถอดรหัสอะไรได้บ้าง"
		],
		"hindi": [
			"रेगिस्तान का दिल, ओर्वेल की आँख।",
			"उसके खाली चेहरे पर, एक सर्पिल पैटर्न घूमता है।",
			"समय का प्रवाह, सब कुछ का जन्म और विनाश।",
			"उसकी शांत निगाहों में, हम क्या समझ सकते हैं?"
		]
	}
} as const;
