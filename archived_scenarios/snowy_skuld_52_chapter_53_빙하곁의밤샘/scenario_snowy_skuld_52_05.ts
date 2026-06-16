export const scenario_snowy_skuld_52_05 = {
	"scenario_id": "snowy_skuld_52_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "snowy",
	"actors": {
		"hild": {
			"id": "mon_6f20c96a-bf07-4aae-b37c-da898a8336e8",
			"name": {
				"korean": "힐드",
				"english": "Hild",
				"japanese": "ヒルド",
				"chinese": "希尔德",
				"french": "Hild",
				"spanish": "Hild",
				"vietnamese": "Hild",
				"thai": "ฮิลด์",
				"hindi": "हिल्ड"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/722a86fd-2903-4688-3f04-db8241ed0e00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/af3d96ba-e571-4132-fede-cd415bd15c00/public"
		}
	},
	"boss": {
		"pool_id": "pool_107"
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "밤샘이 끝났다. 동이 트기 전, 빙하의 신음이 한 줄기 더 또렷해졌다.",
						"english": "The all-nighter ended. Before dawn, the glacier's groans grew clearer still.",
						"japanese": "徹夜が終わった。夜が明ける前、氷河の呻き声がさらに一層はっきりと響いた。",
						"chinese": "通宵结束了。黎明前，冰川的呻吟声又清晰了一分。",
						"french": "La nuit blanche s'acheva. Avant l'aube, les gémissements du glacier devinrent plus distincts encore.",
						"spanish": "La noche en vela terminó. Antes del amanecer, los gemidos del glaciar se hicieron aún más claros.",
						"vietnamese": "Đêm trắng đã qua. Trước bình minh, tiếng rên của sông băng lại càng rõ ràng hơn.",
						"thai": "ค่ำคืนอันยาวนานสิ้นสุดลง ก่อนรุ่งสาง เสียงคร่ำครวญของธารน้ำแข็งก็ยิ่งชัดเจนขึ้น",
						"hindi": "रात भर जागना समाप्त हुआ। भोर होने से पहले, ग्लेशियर की कराहें और अधिक स्पष्ट हो गईं।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "…신음 소리가, 더 크게 들려.",
						"english": "...The groans grow louder.",
						"japanese": "「…うめき声が、もっと大きく聞こえる。」",
						"chinese": "「……呻吟声，更响了。」",
						"french": "「…Les gémissements, plus forts encore.」",
						"spanish": "「…Los gemidos, más fuertes ahora.」",
						"vietnamese": "「…Tiếng rên rỉ, ngày càng lớn hơn.」",
						"thai": "「…เสียงครวญคราง, ดังขึ้นเรื่อยๆ.」",
						"hindi": "「…कराहने की आवाजें, और तेज हो रही हैं।」"
					},
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"speaker": "hild",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "hild",
					"content": {
						"korean": "이 슬픔을… 모른 척할 수 없어.",
						"english": "This sorrow... I cannot ignore.",
						"japanese": "「この悲しみを…見て見ぬふりはできない。」",
						"chinese": "「这份悲伤……我无法视而不见。」",
						"french": "「Cette tristesse… je ne peux l'ignorer.」",
						"spanish": "「Esta tristeza… no puedo ignorarla.」",
						"vietnamese": "「Nỗi buồn này… tôi không thể làm ngơ.」",
						"thai": "「ความเศร้าโศกนี้… ข้าไม่อาจเมินเฉย.」",
						"hindi": "「इस दुख को… मैं अनदेखा नहीं कर सकता।」"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"content": {
						"korean": "슬픔?",
						"english": "Sorrow?",
						"japanese": "「悲しみ？」",
						"chinese": "「悲伤？」",
						"french": "「Tristesse？」",
						"spanish": "「¿Tristeza？」",
						"vietnamese": "「Buồn？」",
						"thai": "「ความเศร้า？」",
						"hindi": "「दुख？」"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "hild",
					"content": {
						"korean": "죽은 것을 기리는 건, 남은 자의 의무니까.",
						"english": "To honor the dead is the duty of the living.",
						"japanese": "「死者を悼むのは、残された者の義務だから。」",
						"chinese": "「缅怀逝者，是生者的义务。」",
						"french": "「Honorer les morts est le devoir des vivants.」",
						"spanish": "「Honrar a los muertos es deber de los vivos.」",
						"vietnamese": "「Tưởng nhớ người đã khuất là nghĩa vụ của người ở lại.」",
						"thai": "「การรำลึกถึงผู้ตายเป็นหน้าที่ของผู้ที่ยังมีชีวิต.」",
						"hindi": "「मृतकों का सम्मान करना, जीवितों का कर्तव्य है।」"
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
					"action": "enter",
					"spot": [
						3,
						2
					],
					"speaker": "hild"
				},
				{
					"type": "speech",
					"speaker": "hild",
					"content": {
						"korean": "빙하는… 울고 있어. 지키지 못한 맹세 때문에.",
						"english": "The glacier... is weeping. For the broken vow.",
						"japanese": "「氷河は…泣いている。守れなかった誓いゆえに。」",
						"chinese": "「冰川……在哭泣。为了未能遵守的誓言。」",
						"french": "「Le glacier… pleure. À cause d'un serment non tenu.」",
						"spanish": "「El glaciar… está llorando. Por la promesa rota.」",
						"vietnamese": "「Sông băng… đang khóc. Vì lời thề không thể giữ.」",
						"thai": "「ธารน้ำแข็ง… กำลังร้องไห้. เพราะคำมั่นที่รักษาไว้ไม่ได้.」",
						"hindi": "「ग्लेशियर… रो रहा है। उस वादे के लिए जो निभाया नहीं जा सका।」"
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "character_1",
					"content": {
						"korean": "지킬 수 없는 맹세도… 맹세일까?",
						"english": "Is a vow that cannot be kept... still a vow?",
						"japanese": "「守れない誓いも…誓いなのだろうか？」",
						"chinese": "「无法遵守的誓言……也算是誓言吗？」",
						"french": "「Un serment impossible à tenir… est-ce toujours un serment？」",
						"spanish": "「¿Una promesa que no se puede cumplir… sigue siendo una promesa？」",
						"vietnamese": "「Lời thề không thể giữ… có còn là lời thề？」",
						"thai": "「คำมั่นที่ไม่สามารถรักษาไว้ได้… ยังคงเป็นคำมั่นอยู่ไหม？」",
						"hindi": "「क्या एक ऐसा वादा जो निभाया नहीं जा सकता… फिर भी वादा है？」"
					},
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "character_2",
					"content": {
						"korean": "잊힌 기록은… 너무 외로운 일이잖아요.",
						"english": "Forgotten records... are such lonely things.",
						"japanese": "「忘れられた記録は…あまりにも寂しいものだから。」",
						"chinese": "「被遗忘的记录……是如此孤独啊。」",
						"french": "「Les souvenirs oubliés… sont si solitaires.」",
						"spanish": "「Los registros olvidados… son algo muy solitario.」",
						"vietnamese": "「Những ghi chép bị lãng quên… thật cô đơn biết bao.」",
						"thai": "「บันทึกที่ถูกลืม… ช่างเดียวดายเหลือเกิน.」",
						"hindi": "「भूले हुए रिकॉर्ड… बहुत अकेले होते हैं।」"
					},
					"type": "speech"
				},
				{
					"speaker": "hild",
					"content": {
						"korean": "(낮은 추모가를 흥얼거린다)",
						"english": "(Humming a low lament)",
						"japanese": "「（低い鎮魂歌を口ずさむ）」",
						"chinese": "「（低声哼唱着挽歌）」",
						"french": "「(Fredonne une complainte discrète)」",
						"spanish": "「(Tararea una elegía baja)」",
						"vietnamese": "「(Ngân nga một khúc ca tưởng niệm trầm thấp)」",
						"thai": "「(ฮัมเพลงไว้อาลัยเบาๆ)」",
						"hindi": "「(धीमी सी शोकगीत गुनगुनाता है)」"
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "hild",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "hild",
					"content": {
						"korean": "그 맹세는… 굳건했지만, 끝내 이행될 수 없었어.",
						"english": "That vow... was steadfast, but ultimately unfulfilled.",
						"japanese": "「あの誓いは…堅固だったが、結局果たされなかった。」",
						"chinese": "「那个誓言……虽然坚定，但最终未能实现。」",
						"french": "「Ce serment… était solide, mais il n'a jamais pu être tenu.」",
						"spanish": "「Esa promesa… era firme, pero al final no pudo cumplirse.」",
						"vietnamese": "「Lời thề ấy… đã rất kiên cố, nhưng cuối cùng không thể thực hiện.」",
						"thai": "「คำมั่นนั้น… หนักแน่น, แต่สุดท้ายก็ไม่อาจทำได้.」",
						"hindi": "「वह वादा… अटल था, लेकिन अंततः पूरा नहीं हो सका।」"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "그래서 빙하가 우는 건가?",
						"english": "Is that why the glacier weeps?",
						"japanese": "「だから氷河は泣いているのか？」",
						"chinese": "「所以冰川才在哭泣吗？」",
						"french": "「Est-ce pour cela que le glacier pleure？」",
						"spanish": "「¿Por eso llora el glaciar？」",
						"vietnamese": "「Vì vậy sông băng mới khóc ư？」",
						"thai": "「นั่นเป็นเหตุผลที่ธารน้ำแข็งร้องไห้หรือ？」",
						"hindi": "「क्या इसलिए ग्लेशियर रो रहा है？」"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "hild",
					"content": {
						"korean": "빙하는 모든 것을 기억하고, 모든 슬픔을 품고 있으니까.",
						"english": "The glacier remembers everything, holding all sorrows.",
						"japanese": "氷河はすべてを記憶し、すべての悲しみを抱いているから。",
						"chinese": "冰川铭记一切，承载所有悲伤。",
						"french": "Le glacier se souvient de tout, il porte toutes les peines.",
						"spanish": "El glaciar lo recuerda todo, abrazando todas las tristezas.",
						"vietnamese": "Vì sông băng ghi nhớ mọi thứ, ôm ấp mọi nỗi buồn.",
						"thai": "เพราะธารน้ำแข็งจดจำทุกสิ่ง และแบกรับความเศร้าโศกทั้งหมดไว้",
						"hindi": "क्योंकि ग्लेशियर सब कुछ याद रखता है, सारी उदासी को समेटे हुए है।"
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "셋의 침묵이 흐르자, 빙하의 신음이 잠시 잦아들었다.",
						"english": "As silence fell among the three, the glacier's groans subsided for a moment.",
						"japanese": "三人の沈黙が流れると、氷河のうめき声は一時的に止んだ。",
						"chinese": "三人陷入沉默，冰川的呻吟声也暂时平息。",
						"french": "Au silence des trois, les gémissements du glacier s'apaisèrent un instant.",
						"spanish": "Al caer el silencio entre los tres, los gemidos del glaciar disminuyeron por un momento.",
						"vietnamese": "Khi ba người im lặng, tiếng rên rỉ của sông băng tạm thời lắng xuống.",
						"thai": "เมื่อความเงียบปกคลุมทั้งสาม เสียงคร่ำครวญของธารน้ำแข็งก็ลดลงชั่วขณะ",
						"hindi": "तीनों के मौन होते ही, ग्लेशियर की कराहट कुछ देर के लिए थम गई।"
					}
				},
				{
					"duration_ms": 500,
					"speaker": "hild",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "hild",
					"content": {
						"korean": "빙하는… 누군가 들어주기를 기다려왔어.",
						"english": "The glacier... has been waiting for someone to listen.",
						"japanese": "氷河は…誰かが耳を傾けてくれるのを待っていたんだ。",
						"chinese": "冰川…一直在等待有人倾听。",
						"french": "Le glacier... attendait que quelqu'un l'écoute.",
						"spanish": "El glaciar... ha estado esperando que alguien lo escuche.",
						"vietnamese": "Sông băng... đã chờ đợi có người lắng nghe.",
						"thai": "ธารน้ำแข็ง... เฝ้ารอใครสักคนมาฟัง",
						"hindi": "ग्लेशियर... किसी के सुनने का इंतज़ार कर रहा था।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"content": {
						"korean": "우리가… 그 이야기를 들으러 온 거야.",
						"english": "We... have come to hear that story.",
						"japanese": "私たちが…その話を聞きに来たんだ。",
						"chinese": "我们…就是来听那个故事的。",
						"french": "Nous... sommes venus écouter cette histoire.",
						"spanish": "Nosotros... hemos venido a escuchar esa historia.",
						"vietnamese": "Chúng ta... đến đây để nghe câu chuyện đó.",
						"thai": "พวกเรา... มาที่นี่เพื่อฟังเรื่องราวนั้น",
						"hindi": "हम... वही कहानी सुनने आए हैं।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_2",
					"content": {
						"korean": "이제, 남겨진 진실을 마주할 시간이야.",
						"english": "Now, it's time to face the truth that remains.",
						"japanese": "さあ、残された真実と向き合う時間だ。",
						"chinese": "现在，是时候面对那留存的真相了。",
						"french": "Maintenant, il est temps d'affronter la vérité qui demeure.",
						"spanish": "Ahora, es tiempo de enfrentar la verdad que queda.",
						"vietnamese": "Giờ là lúc đối mặt với sự thật còn sót lại.",
						"thai": "ถึงเวลาที่จะเผชิญหน้ากับความจริงที่หลงเหลืออยู่",
						"hindi": "अब, बची हुई सच्चाई का सामना करने का समय है।"
					}
				}
			]
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "거대한 존재의 신음이 멎었다. 빙하의 차가운 정적이 숲을 감쌌다.",
						"english": "The groan of the colossal entity ceased. The glacier's cold silence enveloped the forest.",
						"japanese": "巨大な存在の呻きが止んだ。氷河の冷たい静寂が森を包み込んだ。",
						"chinese": "巨大存在的呻吟停止了。冰川的冰冷寂静笼罩了森林。",
						"french": "Le gémissement de l'entité colossale cessa. Le silence froid du glacier enveloppa la forêt.",
						"spanish": "El gemido de la entidad colosal cesó. El frío silencio del glaciar envolvió el bosque.",
						"vietnamese": "Tiếng rên rỉ của thực thể khổng lồ đã ngừng. Sự tĩnh lặng lạnh lẽo của sông băng bao trùm khu rừng.",
						"thai": "เสียงคร่ำครวญของสิ่งมีชีวิตมหึมาได้หยุดลง ความเงียบเยือกเย็นของธารน้ำแข็งปกคลุมป่า",
						"hindi": "विशाल सत्ता की कराह बंद हो गई। ग्लेशियर की ठंडी खामोशी ने जंगल को घेर लिया।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "boss",
					"content": {
						"korean": "…고맙다. 맹세는… 이행되었다. 나의 영혼은… 이제 자유롭다.",
						"english": "...Thank you. The vow... has been fulfilled. My soul... is now free.",
						"japanese": "…ありがとう。誓いは…果たされた。私の魂は…今、自由だ。",
						"chinese": "…谢谢。誓言…已履行。我的灵魂…现在自由了。",
						"french": "...Merci. Le vœu... a été accompli. Mon âme... est maintenant libre.",
						"spanish": "...Gracias. El juramento... ha sido cumplido. Mi alma... ahora es libre.",
						"vietnamese": "...Cảm ơn. Lời thề... đã được thực hiện. Linh hồn của ta... giờ đã tự do.",
						"thai": "...ขอบคุณ คำสาบาน... ได้รับการเติมเต็มแล้ว วิญญาณของข้า... เป็นอิสระแล้ว",
						"hindi": "...धन्यवाद। शपथ... पूरी हो गई है। मेरी आत्मा... अब स्वतंत्र है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"action": "enter",
					"type": "direction",
					"speaker": "hild",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"speaker": "hild",
					"content": {
						"korean": "당신의 마지막 이야기는… 우리와 함께할 거예요.",
						"english": "Your final story... will be with us.",
						"japanese": "あなたの最後の物語は… 私たちと共にあります。",
						"chinese": "你的最终故事… 将与我们同在。",
						"french": "Ta dernière histoire... restera avec nous.",
						"spanish": "Tu última historia... estará con nosotros.",
						"vietnamese": "Câu chuyện cuối cùng của bạn... sẽ ở lại với chúng tôi.",
						"thai": "เรื่องราวสุดท้ายของท่าน... จะอยู่กับเรา",
						"hindi": "तुम्हारी अंतिम कहानी... हमारे साथ रहेगी।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "우리는 이제… 다음 진실을 향해 나아간다.",
						"english": "We now... move towards the next truth.",
						"japanese": "私たちは今… 次の真実へと進む。",
						"chinese": "我们现在… 向下一个真相前进。",
						"french": "Nous avançons maintenant… vers la prochaine vérité.",
						"spanish": "Ahora... avanzamos hacia la siguiente verdad.",
						"vietnamese": "Giờ đây chúng ta... tiến tới sự thật tiếp theo.",
						"thai": "บัดนี้เรา... ก้าวไปสู่ความจริงถัดไป",
						"hindi": "अब हम... अगले सत्य की ओर बढ़ते हैं।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "빙하의 슬픔은 멈췄지만, 세상의 비극은 끝나지 않았다.",
						"english": "The glacier's sorrow has ceased, but the world's tragedy has not ended.",
						"japanese": "氷河の悲しみは止んだが、世界の悲劇は終わっていない。",
						"chinese": "冰川的悲伤停止了，但世界的悲剧并未结束。",
						"french": "La tristesse du glacier a cessé, mais la tragédie du monde n'est pas finie.",
						"spanish": "La pena del glaciar ha cesado, pero la tragedia del mundo no ha terminado.",
						"vietnamese": "Nỗi buồn của sông băng đã chấm dứt, nhưng bi kịch của thế giới thì chưa.",
						"thai": "ความเศร้าโศกของธารน้ำแข็งได้หยุดลงแล้ว แต่โศกนาฏกรรมของโลกยังไม่สิ้นสุด",
						"hindi": "ग्लेशियर का दुख थम गया है, लेकिन दुनिया की त्रासदी खत्म नहीं हुई है।"
					},
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "얼음 속으로 모든 것이 빨려 들어갔다. 빙하의 신음이 다시금 셋을 집어삼켰다.",
						"english": "Everything was sucked into the ice. The glacier's groan once again swallowed the three.",
						"japanese": "全てが氷の中に吸い込まれた。氷河の呻きが再び三人を取り込んだ。",
						"chinese": "一切都被吸入冰中。冰川的呻吟再次吞噬了三人。",
						"french": "Tout fut aspiré dans la glace. Le gémissement du glacier engloutit de nouveau les trois.",
						"spanish": "Todo fue absorbido por el hielo. El gemido del glaciar volvió a engullir a los tres.",
						"vietnamese": "Mọi thứ bị hút vào băng. Tiếng rên rỉ của sông băng một lần nữa nuốt chửng cả ba.",
						"thai": "ทุกสิ่งถูกดูดกลืนเข้าสู่ก้อนน้ำแข็ง เสียงคร่ำครวญของธารน้ำแข็งกลืนกินทั้งสามอีกครั้ง",
						"hindi": "सब कुछ बर्फ में समा गया। ग्लेशियर की कराह ने फिर से तीनों को निगल लिया।"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "boss",
					"content": {
						"korean": "…아직 나의 슬픔을… 이해하지 못했구나.",
						"english": "...You still haven't understood my sorrow.",
						"japanese": "…まだ私の悲しみを…理解していないのか。",
						"chinese": "…你们还没有…理解我的悲伤。",
						"french": "...Vous n'avez pas encore... compris ma douleur.",
						"spanish": "...Aún no habéis... comprendido mi dolor.",
						"vietnamese": "...Các ngươi vẫn chưa... hiểu được nỗi buồn của ta.",
						"thai": "...ยังไม่เข้าใจความเศร้าของข้า... สินะ",
						"hindi": "...तुमने अभी तक... मेरा दुख नहीं समझा।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "…젠장. 다시… 다시 돌아올 거야!",
						"english": "...Damn it. I'll... I'll be back!",
						"japanese": "…くそ。また…また戻ってくるぞ！",
						"chinese": "…该死。我还会…回来的！",
						"french": "...Zut. Je... je reviendrai !",
						"spanish": "...Maldita sea. ¡Volveré... volveré!",
						"vietnamese": "...Chết tiệt. Ta sẽ... ta sẽ quay lại!",
						"thai": "...ให้ตายสิ ข้าจะ... กลับมาอีกครั้ง!",
						"hindi": "...धत् तेरे की। मैं... मैं वापस आऊंगा!"
					}
				},
				{
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"speaker": "hild",
					"type": "direction",
					"action": "enter"
				},
				{
					"speaker": "hild",
					"content": {
						"korean": "포기하지 마세요. 망자의 약속은… 쉽게 부서지지 않아요.",
						"english": "Don't give up. The promise of the dead... it doesn't break easily.",
						"japanese": "諦めないでください。死者の約束は…簡単には壊れません。",
						"chinese": "别放弃。亡者的诺言…不会轻易破碎。",
						"french": "N'abandonnez pas. La promesse des morts… ne se brise pas facilement.",
						"spanish": "No te rindas. La promesa de los muertos… no se rompe fácilmente.",
						"vietnamese": "Đừng bỏ cuộc. Lời hứa của người chết… không dễ dàng tan vỡ.",
						"thai": "อย่ายอมแพ้ คำสัญญาของผู้ตาย…ไม่แตกสลายง่ายๆ",
						"hindi": "हार मत मानो। मृतकों का वादा… आसानी से नहीं टूटता।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "빙하의 가장 깊은 곳, 거대한 존재가 셋을 기다리고 있었다. 그 신음은 이제 절규에 가까웠다.",
						"english": "In the deepest part of the glacier, a colossal being awaited the three. Its groans were now closer to wails.",
						"japanese": "氷河の最も深い場所で、巨大な存在が三人（を）待っていた。そのうめき声は今や叫びに近かった。",
						"chinese": "在冰川最深处，一个巨大的存在等待着三人。它的呻吟声如今已接近绝望的哭喊。",
						"french": "Dans les profondeurs du glacier, une entité colossale attendait les trois. Ses gémissements étaient désormais proches des hurlements.",
						"spanish": "En lo más profundo del glaciar, un ser colosal esperaba a los tres. Sus gemidos ahora eran casi lamentos.",
						"vietnamese": "Nơi sâu thẳm nhất của sông băng, một thực thể khổng lồ đang chờ đợi ba người. Tiếng rên rỉ của nó giờ đã gần như là tiếng gào thét.",
						"thai": "ณ ส่วนที่ลึกที่สุดของธารน้ำแข็ง สิ่งมีชีวิตขนาดยักษ์กำลังรอคอยทั้งสาม เสียงคร่ำครวญของมันใกล้เคียงกับเสียงกรีดร้อง",
						"hindi": "ग्लेशियर के सबसे गहरे हिस्से में, एक विशालकाय प्राणी तीनों का इंतजार कर रहा था। उसकी कराहटें अब चीखों के करीब थीं।"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "boss",
					"content": {
						"korean": "…오는가. 나의 슬픔을… 나눌 자들이.",
						"english": "...Are they coming? Those who will share... my sorrow.",
						"japanese": "…来るのか。私の悲しみを…分かち合う者たちが。",
						"chinese": "…来了吗。那些…将分担我悲伤之人。",
						"french": "...Viennent-ils ? Ceux qui... partageront ma peine.",
						"spanish": "...¿Vienen? Aquellos que... compartirán mi tristeza.",
						"vietnamese": "...Đã đến rồi sao? Những kẻ sẽ chia sẻ... nỗi buồn của ta.",
						"thai": "...มาแล้วหรือ ผู้ที่จะ... แบ่งปันความเศร้าของข้า",
						"hindi": "...आ रहे हैं क्या? वे, जो मेरे दुख को... बाटेंगे।"
					}
				},
				{
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"speaker": "hild",
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "hild",
					"content": {
						"korean": "당신의 슬픔을… 우리가 기릴게요.",
						"english": "Your sorrow... we will honor it.",
						"japanese": "あなたの悲しみを…私たちがたたえましょう。",
						"chinese": "您的悲伤…我们会铭记。",
						"french": "Votre peine... nous l'honorerons.",
						"spanish": "Su tristeza... la honraremos.",
						"vietnamese": "Nỗi buồn của người... chúng tôi sẽ tôn vinh.",
						"thai": "ความเศร้าของท่าน... เราจะจดจำ",
						"hindi": "आपके दुख का... हम सम्मान करेंगे।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "당신은 누구지?",
						"english": "Who are you?",
						"japanese": "あなたは誰だ？",
						"chinese": "你是谁？",
						"french": "Qui êtes-vous ?",
						"spanish": "¿Quién eres?",
						"vietnamese": "Ngươi là ai?",
						"thai": "ท่านคือใคร?",
						"hindi": "तुम कौन हो?"
					}
				},
				{
					"emotion": "sad",
					"speaker": "boss",
					"content": {
						"korean": "나는… 잊힌 맹세이자, 버려진 기록. 이 거대한 관에 갇힌… 스쿌드.",
						"english": "I am... a forgotten vow, a discarded record. Skjold... imprisoned in this colossal coffin.",
						"japanese": "私は…忘れられた誓い、捨てられた記録。この巨大な棺に囚われた…スクヨルド。",
						"chinese": "我是…被遗忘的誓言，被抛弃的记录。被困在这巨大棺椁中的…斯库约德。",
						"french": "Je suis... un serment oublié, un registre abandonné. Skjold... emprisonné dans ce cercueil colossal.",
						"spanish": "Soy... una promesa olvidada, un registro abandonado. Skjold... atrapado en este ataúd colosal.",
						"vietnamese": "Ta là... một lời thề bị lãng quên, một ghi chép bị bỏ rơi. Skjold... bị giam cầm trong quan tài khổng lồ này.",
						"thai": "ข้าคือ... คำสาบานที่ถูกลืม, บันทึกที่ถูกทิ้งร้าง สกยอลด์... ผู้ถูกจองจำในโลงศพมหึมานี้",
						"hindi": "मैं... एक भूली हुई प्रतिज्ञा, एक त्यागा हुआ अभिलेख हूँ। इस विशाल ताबूत में कैद... स्क्योल्ड।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_1",
					"content": {
						"korean": "스쿌드… 우리가 이 비극을 끝내주겠어!",
						"english": "Skuld... we will end this tragedy!",
						"japanese": "スクルド… 私たちがこの悲劇を終わらせる！",
						"chinese": "丝库尔德… 我们会结束这场悲剧！",
						"french": "Skuld… nous mettrons fin à cette tragédie !",
						"spanish": "Skuld… ¡acabaremos con esta tragedia!",
						"vietnamese": "Skuld… chúng ta sẽ chấm dứt bi kịch này!",
						"thai": "สกุลด์... เราจะจบโศกนาฏกรรมนี้เอง!",
						"hindi": "स्कुल्ड... हम इस त्रासदी को खत्म करेंगे!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "character_2",
					"content": {
						"korean": "당신의 이름을… 우리가 기억할게요!",
						"english": "We will remember your name!",
						"japanese": "あなたの名前… 私たちが記憶する！",
						"chinese": "我们会铭记你的名字！",
						"french": "Nous nous souviendrons de ton nom !",
						"spanish": "¡Recordaremos tu nombre!",
						"vietnamese": "Chúng tôi sẽ nhớ tên của bạn!",
						"thai": "เราจะจดจำชื่อของท่าน!",
						"hindi": "हम तुम्हारा नाम याद रखेंगे!"
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"밤샘의 끝. 셋은 빙하 곁에서 동을 기다렸다.",
			"끊이지 않던 신음은 밤새도록 셋의 마음을 흔들었다.",
			"그것은 위협이 아니었다. 거대한 슬픔의 메아리였다.",
			"이제, 진실을 마주할 시간. 가장 깊은 곳으로."
		],
		"english": [
			"The all-nighter ended. The three awaited dawn by the glacier.",
			"The ceaseless groans shook their hearts all night.",
			"It was no threat, but an echo of immense sorrow.",
			"Now, time to face the truth. To the deepest depths."
		],
		"japanese": [
			"徹夜が明けた。三人は氷河の傍らで夜明けを待った。",
			"絶え間ない呻き声が、夜通し三人の心を揺さぶった。",
			"それは脅威ではなかった。巨大な悲しみのこだまだった。",
			"さあ、真実と向き合う時。最も深い場所へ。"
		],
		"chinese": [
			"通宵结束。三人依偎在冰川旁，等待黎明。",
			"不绝的呻吟声彻夜动摇着三人的心。",
			"那并非威胁，而是巨大悲伤的回响。",
			"现在，是时候面对真相了。深入最深处。"
		],
		"french": [
			"La nuit blanche touchait à sa fin. Les trois attendaient l'aube près du glacier.",
			"Les gémissements incessants agitèrent leurs cœurs toute la nuit.",
			"Ce n'était pas une menace, mais l'écho d'une immense tristesse.",
			"Maintenant, il est temps d'affronter la vérité. Vers les profondeurs."
		],
		"spanish": [
			"La noche en vela terminó. Los tres esperaron el amanecer junto al glaciar.",
			"Los gemidos incesantes sacudieron sus corazones toda la noche.",
			"No era una amenaza, sino el eco de una inmensa tristeza.",
			"Ahora, es hora de enfrentar la verdad. Hacia lo más profundo."
		],
		"vietnamese": [
			"Đêm trắng kết thúc. Ba người đợi bình minh bên sông băng.",
			"Tiếng rên rỉ không ngớt làm rung động lòng ba người suốt đêm.",
			"Đó không phải là mối đe dọa. Đó là tiếng vọng của nỗi buồn vô tận.",
			"Giờ là lúc đối mặt với sự thật. Đến nơi sâu thẳm nhất."
		],
		"thai": [
			"สิ้นสุดค่ำคืนอันยาวนาน ทั้งสามเฝ้ารออรุณรุ่งข้างธารน้ำแข็ง",
			"เสียงคร่ำครวญไม่ขาดสายสั่นคลอนจิตใจของทั้งสามตลอดทั้งคืน",
			"มันไม่ใช่ภัยคุกคาม แต่มันคือเสียงสะท้อนของความโศกเศร้าอันยิ่งใหญ่",
			"บัดนี้ ได้เวลาเผชิญหน้ากับความจริง มุ่งสู่ห้วงลึกที่สุด"
		],
		"hindi": [
			"रात भर जागना समाप्त हुआ। तीनों ने ग्लेशियर के पास भोर की प्रतीक्षा की।",
			"लगातार कराहें रात भर तीनों के दिलों को हिलाती रहीं。",
			"वह कोई खतरा नहीं था। वह अथाह दुःख की प्रतिध्वनि थी।",
			"अब, सच का सामना करने का समय है। सबसे गहरी जगह तक।"
		]
	},
	"epilogue": {
		"korean": [
			"빙하의 신음은 멎었다. 하지만 셋의 가슴 속에는, 그 슬픔의 여운이 길게 남았다.",
			"잊힌 맹세와 버려진 기록. 그들이 들었던 진실은 차갑고 아팠다.",
			"그것은 구원이었을까, 아니면 또 다른 침해였을까. 알 수 없었다.",
			"다만, 이제 셋은 안다. 모든 이름에는 이야기가 있고, 모든 맹세에는 무게가 있음을.",
			"동이 터 오고 있었다. 새로운 시작이자, 또 다른 비극의 서막처럼."
		],
		"english": [
			"The glacier's groans ceased. But in their hearts, the echo of sorrow lingered.",
			"Forgotten vows, abandoned records. The truth they heard was cold and painful.",
			"Was it salvation, or another transgression? They could not know.",
			"Yet now, they know: every name holds a story, every vow carries weight.",
			"Dawn was breaking. A new beginning, or the prelude to another tragedy."
		],
		"japanese": [
			"氷河の呻き声は止んだ。しかし、三人の胸には、その悲しみの余韻が長く残った。",
			"忘れられた誓いと捨てられた記録。彼らが聞いた真実は冷たく、痛ましいものだった。",
			"それは救済だったのか、それとも新たな侵害だったのか。知る由もなかった。",
			"ただ、三人は今知っている。全ての名前には物語があり、全ての誓いには重みがあることを。",
			"夜が明け始めていた。新たな始まりであり、また別の悲劇の序幕のように。"
		],
		"chinese": [
			"冰川的呻吟停止了。但在三人心中，那悲伤的余韵久久不散。",
			"遗忘的誓言与被弃的记录。他们听到的真相既冰冷又痛苦。",
			"那是救赎，还是又一次侵犯？无从知晓。",
			"然而，现在三人明白。每个名字都有故事，每个誓言都有分量。",
			"黎明正在破晓。像是一个新的开始，又像是另一场悲剧的序幕。"
		],
		"french": [
			"Les gémissements du glacier cessèrent. Mais dans leurs cœurs, l'écho de cette tristesse demeura longtemps.",
			"Serments oubliés et archives abandonnées. La vérité qu'ils apprirent était froide et douloureuse.",
			"Était-ce le salut, ou une autre transgression ? Impossible de le savoir.",
			"Mais maintenant, ils savent. Chaque nom recèle une histoire, chaque serment pèse son poids.",
			"L'aube se levait. Un nouveau départ, ou le prélude à une autre tragédie."
		],
		"spanish": [
			"Los gemidos del glaciar cesaron. Pero en sus corazones, el eco de esa tristeza perduró.",
			"Promesas olvidadas y registros abandonados. La verdad que escucharon era fría y dolorosa.",
			"¿Fue salvación, o una nueva transgresión? No pudieron saberlo.",
			"Pero ahora, los tres lo saben. Cada nombre tiene una historia, cada promesa tiene un peso.",
			"Amanecía. Un nuevo comienzo, o el preludio de otra tragedia."
		],
		"vietnamese": [
			"Tiếng rên của sông băng đã dứt. Nhưng trong lòng ba người, dư âm nỗi buồn vẫn còn mãi.",
			"Lời thề bị lãng quên và ghi chép bị bỏ rơi. Sự thật họ nghe được thật lạnh lẽo và đau đớn.",
			"Đó là sự cứu rỗi, hay một sự xâm phạm khác? Không thể biết được.",
			"Nhưng giờ đây, ba người đã biết. Mỗi cái tên đều có một câu chuyện, và mỗi lời thề đều có trọng lượng.",
			"Bình minh đang hé rạng. Một khởi đầu mới, hay khúc dạo đầu của một bi kịch khác."
		],
		"thai": [
			"เสียงคร่ำครวญของธารน้ำแข็งสิ้นสุดลง แต่ในใจของทั้งสาม ความโศกเศร้านั้นยังคงอยู่",
			"คำสาบานที่ถูกลืมและบันทึกที่ถูกทอดทิ้ง ความจริงที่พวกเขาได้ยินนั้นช่างเย็นชาและเจ็บปวด",
			"มันคือการไถ่บาป หรือการละเมิดครั้งใหม่? ไม่อาจรู้ได้",
			"แต่ตอนนี้ ทั้งสามรู้แล้วว่า ทุกชื่อมีเรื่องราว และทุกคำสาบานมีน้ำหนัก",
			"อรุณรุ่งกำลังมาเยือน เป็นการเริ่มต้นใหม่ หรือเป็นฉากนำของโศกนาฏกรรมอีกครั้ง"
		],
		"hindi": [
			"ग्लेशियर की कराहें थम गईं। लेकिन तीनों के दिलों में, उस दुःख की गूँज लंबे समय तक रही।",
			"भूले हुए वादे और त्यागे गए अभिलेख। जो सच उन्होंने सुना, वह ठंडा और दर्दनाक था।",
			"क्या वह मुक्ति थी, या एक और अतिक्रमण? वे जान नहीं पाए।",
			"बस, अब तीनों जानते हैं। हर नाम की एक कहानी होती है, और हर वादे का अपना महत्व होता है।",
			"भोर हो रही थी। एक नई शुरुआत, और एक और त्रासदी की प्रस्तावना की तरह।"
		]
	}
} as const;
