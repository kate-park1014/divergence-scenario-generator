export const scenario_modern_kyrios_1_03 = {
	"scenario_id": "modern_kyrios_1_03",
	"order": 3,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"lin": {
			"id": "mon_d036a884-3dde-472c-9fe7-c4807643860f",
			"name": {
				"korean": "린",
				"english": "Lin",
				"japanese": "リン",
				"chinese": "琳",
				"french": "Lin",
				"spanish": "Lin",
				"vietnamese": "Lin",
				"thai": "ลิน",
				"hindi": "लिन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a095dd66-1857-4f44-68b0-2ece83006d00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/05b02694-f1ed-4e4c-b7ca-fb5b74a48900/public"
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
					"content": {
						"korean": "도시의 가장 높은 빌딩. 거대 기업의 본사는 차가운 유리와 철골로 이루어져 있었다.",
						"english": "The city's tallest building. The giant corporation's headquarters, made of cold glass and steel.",
						"japanese": "街で一番高いビル。巨大企業のN本社は冷たいガラスと鉄骨でできていた。",
						"chinese": "城市中最高的建筑。巨型企业的总部由冰冷的玻璃和钢筋构成。",
						"french": "Le plus haut bâtiment de la ville. Le siège de la multinationale, fait de verre froid et d'acier.",
						"spanish": "El edificio más alto de la ciudad. La sede de la corporación gigante, hecha de frío cristal y acero.",
						"vietnamese": "Tòa nhà cao nhất thành phố. Trụ sở tập đoàn khổng lồ, được làm từ kính và thép lạnh lẽo.",
						"thai": "ตึกที่สูงที่สุดในเมือง สำนักงานใหญ่ของบริษัทขนาดยักษ์สร้างจากกระจกและเหล็กกล้าเย็นยะเยือก",
						"hindi": "शहर की सबसे ऊँची इमारत। विशाल निगम का मुख्यालय ठंडे काँच और स्टील से बना था।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "direction",
					"speaker": "lin",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						4,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "lin",
					"emotion": "angry",
					"content": {
						"korean": "젠장. 이 빌딩만큼이나 숨 막히는 서류들이야.",
						"english": "Damn it. These papers are as suffocating as this building.",
						"japanese": "ちくしょう。このビルと同じくらい息苦しい書類の山だ。",
						"chinese": "该死。这些文件和这栋大楼一样令人窒息。",
						"french": "Bon sang. Ces papiers sont aussi étouffants que ce bâtiment.",
						"spanish": "Maldita sea. Estos papeles son tan asfixiantes como este edificio.",
						"vietnamese": "Chết tiệt. Đống giấy tờ này ngột ngạt chẳng khác gì cái tòa nhà này.",
						"thai": "ให้ตายสิ เอกสารพวกนี้มันอึดอัดพอๆ กับตึกนี้เลย",
						"hindi": "धिक्कार है। ये कागज़ इस इमारत जितने ही घुटन भरे हैं।"
					}
				},
				{
					"type": "speech",
					"speaker": "lin",
					"emotion": "base",
					"content": {
						"korean": "이건 인간이 만든 계약이 아니야. 덫이지.",
						"english": "This isn't a human contract. It's a trap.",
						"japanese": "これは人間が作った契約じゃない。罠だ。",
						"chinese": "这不是人类的契约。这是一个陷阱。",
						"french": "Ce n'est pas un contrat humain. C'est un piège.",
						"spanish": "Esto no es un contrato humano. Es una trampa.",
						"vietnamese": "Đây không phải hợp đồng do con người tạo ra. Đây là một cái bẫy.",
						"thai": "นี่ไม่ใช่สัญญาที่มนุษย์สร้างขึ้น แต่มันคือกับดัก",
						"hindi": "यह कोई इंसानी अनुबंध नहीं है। यह एक जाल है।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "덫이라고요?",
						"english": "A trap?",
						"japanese": "罠ですか？",
						"chinese": "陷阱？",
						"french": "Un piège ?",
						"spanish": "¿Una trampa?",
						"vietnamese": "Cái bẫy sao?",
						"thai": "กับดักเหรอ?",
						"hindi": "जाल?"
					},
					"type": "speech",
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "lin",
					"type": "direction"
				},
				{
					"content": {
						"korean": "이 도시의 계약은 단순한 종이가 아니야.",
						"english": "Contracts in this city aren't just mere papers.",
						"japanese": "この街の契約はただの紙じゃない。",
						"chinese": "这个城市的契约不仅仅是简单的纸张。",
						"french": "Les contrats de cette ville ne sont pas de simples papiers.",
						"spanish": "Los contratos de esta ciudad no son solo simples papeles.",
						"vietnamese": "Hợp đồng ở thành phố này không chỉ là những tờ giấy đơn thuần.",
						"thai": "สัญญาในเมืองนี้ไม่ใช่แค่กระดาษธรรมดา",
						"hindi": "इस शहर के अनुबंध महज़ कागज़ नहीं हैं।"
					},
					"emotion": "base",
					"speaker": "lin",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "맹목적으로 구속하지. 마치 어떤 거대한 힘이 묶어놓은 것처럼.",
						"english": "They bind blindly. As if some colossal power has tied them down.",
						"japanese": "それは盲目的に束縛する。まるで何か巨大な力が縛り付けているかのように。",
						"chinese": "它们盲目地束缚着，仿佛被某种巨大的力量捆绑。",
						"french": "Ils lient aveuglément. Comme si une force colossale les avait attachés.",
						"spanish": "Atan ciegamente. Como si algún poder colosal los hubiera encadenado.",
						"vietnamese": "Chúng ràng buộc một cách mù quáng. Cứ như thể một thế lực khổng lồ nào đó đã trói buộc chúng.",
						"thai": "มันผูกมัดอย่างมืดบอด ราวกับถูกพลังอันมหาศาลบางอย่างผูกเอาไว้",
						"hindi": "वे अंधाधुंध बांधते हैं। जैसे किसी विशाल शक्ति ने उन्हें बाँध रखा हो।"
					},
					"type": "speech",
					"speaker": "lin"
				},
				{
					"content": {
						"korean": "거대한 힘이라니요?",
						"english": "Immense power, you say?",
						"japanese": "「強大な力、と？」",
						"chinese": "巨大的力量？",
						"french": "Une puissance immense, dites-vous ?",
						"spanish": "¿Un poder inmenso?",
						"vietnamese": "Sức mạnh to lớn sao?",
						"thai": "พลังมหาศาลหรือ?",
						"hindi": "विशाल शक्ति, आप कह रहे हैं?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "그림자 의회는 도시의 질서를 지킨다고 하지만… 그 방식은 너무 잔혹해.",
						"english": "The Shadow Council claims to maintain order in the city... but their methods are too cruel.",
						"japanese": "「影の評議会は都市の秩序を守ると言うが…そのやり方はあまりに残酷だ。」",
						"chinese": "影之议会声称维护城市秩序……但他们的手段过于残忍。",
						"french": "Le Conseil de l'Ombre prétend maintenir l'ordre en ville... mais leurs méthodes sont trop cruelles.",
						"spanish": "El Consejo de las Sombras dice mantener el orden en la ciudad... pero sus métodos son demasiado crueles.",
						"vietnamese": "Hội đồng Bóng tối nói rằng họ giữ gìn trật tự của thành phố... nhưng cách của họ quá tàn nhẫn.",
						"thai": "สภาเงาอ้างว่ารักษาระเบียบของเมือง... แต่วิธีการของพวกเขานั้นโหดร้ายเกินไป",
						"hindi": "छाया परिषद शहर में व्यवस्था बनाए रखने का दावा करती है... लेकिन उनके तरीके बहुत क्रूर हैं।"
					},
					"type": "speech",
					"speaker": "lin"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "계약을 어기면 상상 이상의 대가를 치르게 될 거야. 조심해.",
						"english": "Break the contract, and you'll pay a price beyond imagination. Be careful.",
						"japanese": "「契約を破れば、想像以上の代償を払うことになるだろう。気をつけろ。」",
						"chinese": "违背契约，你将付出超乎想象的代价。小心。",
						"french": "Si tu brises le contrat, tu en paieras le prix, au-delà de l'imagination. Sois prudent.",
						"spanish": "Si rompes el contrato, pagarás un precio más allá de lo imaginable. Ten cuidado.",
						"vietnamese": "Nếu phá vỡ giao ước, ngươi sẽ phải trả một cái giá không tưởng. Cẩn thận đấy.",
						"thai": "หากผิดสัญญา เจ้าจะต้องชดใช้ในราคาที่เหนือจินตนาการ ระวังตัวไว้",
						"hindi": "अनुबंध तोड़ने पर, तुम्हें कल्पना से परे कीमत चुकानी होगी। सावधान रहना।"
					},
					"type": "speech",
					"speaker": "lin"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "lin",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"content": {
						"korean": "서약은 한번 맺으면 깨지지 않아. 깨려고 하면 너 자신을 잃게 될 거다.",
						"english": "Once a vow is made, it cannot be broken. Try to break it, and you'll lose yourself.",
						"japanese": "「誓約は一度結べば破れない。破ろうとすれば、お前自身を失うことになるだろう。」",
						"chinese": "誓约一旦结成，便无法打破。若试图打破，你将失去自我。",
						"french": "Une fois le serment fait, il ne peut être brisé. Tente de le briser, et tu te perdras toi-même.",
						"spanish": "Una vez hecho el juramento, no puede romperse. Si intentas romperlo, te perderás a ti mismo.",
						"vietnamese": "Một khi lời thề đã lập, không thể phá vỡ. Cố gắng phá vỡ, ngươi sẽ đánh mất chính mình.",
						"thai": "เมื่อคำสาบานได้ถูกผูกมัดแล้ว มันจะไม่มีวันแตกหัก หากเจ้าพยายามที่จะทำลายมัน เจ้าจะต้องสูญเสียตัวเอง",
						"hindi": "एक बार प्रतिज्ञा हो जाए, तो वह टूटती नहीं। इसे तोड़ने की कोशिश करोगे, तो तुम खुद को खो दोगे।"
					},
					"type": "speech",
					"speaker": "lin"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "도대체 누가 이런 걸 만든 거죠?",
						"english": "Who on earth created something like this?",
						"japanese": "「一体誰がこんなものを作ったんだ？」",
						"chinese": "到底是谁创造了这种东西？",
						"french": "Qui diable a créé une chose pareille ?",
						"spanish": "¿Quién demonios creó algo así?",
						"vietnamese": "Rốt cuộc là ai đã tạo ra thứ này?",
						"thai": "ใครเป็นคนสร้างสิ่งนี้กันแน่?",
						"hindi": "आखिर किसने बनाया ये सब?"
					}
				},
				{
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "오랜 과거부터 이어진… 불가사의한 힘. 어쩌면 도시 그 자체의 규칙일지도.",
						"english": "An inexplicable power, continuing from the distant past... Perhaps it's the very rule of the city itself.",
						"japanese": "「遠い過去から続く…不可解な力。もしかしたら、都市そのもののルールなのかもしれない。」",
						"chinese": "源于遥远过去的……不可思议的力量。或许，这正是城市本身的法则。",
						"french": "Un pouvoir inexplicable, venu d'un passé lointain... C'est peut-être la règle de la ville elle-même.",
						"spanish": "Un poder inexplicable, que viene de un pasado lejano... Quizás sea la propia regla de la ciudad.",
						"vietnamese": "Một sức mạnh bí ẩn, kéo dài từ quá khứ xa xăm... Có lẽ đó là quy tắc của chính thành phố này.",
						"thai": "พลังลึกลับที่สืบทอดมาจากอดีตอันไกลโพ้น... บางทีอาจเป็นกฎเกณฑ์ของเมืองนี้เองก็ได้",
						"hindi": "सुदूर अतीत से चली आ रही... एक रहस्यमय शक्ति। शायद यह शहर का ही नियम हो।"
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "표면적인 질서 뒤에 감춰진 고통을 봐. 계약의 본질은 구원이 아니야.",
						"english": "See the suffering hidden behind the superficial order. The essence of the contract is not salvation.",
						"japanese": "「表面的な秩序の裏に隠された苦痛を見ろ。契約の本質は救済ではない。」",
						"chinese": "看看表面秩序背后隐藏的痛苦。契约的本质并非救赎。",
						"french": "Vois la souffrance cachée derrière l'ordre superficiel. L'essence du contrat n'est pas le salut.",
						"spanish": "Mira el sufrimiento oculto tras el orden superficial. La esencia del contrato no es la salvación.",
						"vietnamese": "Hãy nhìn nỗi đau ẩn giấu sau vẻ ngoài trật tự. Bản chất của giao ước không phải là sự cứu rỗi.",
						"thai": "มองดูความทุกข์ทรมานที่ซ่อนอยู่เบื้องหลังความสงบสุขภายนอก สาระสำคัญของสัญญาไม่ใช่การไถ่บาป",
						"hindi": "सतही व्यवस्था के पीछे छिपे दर्द को देखो। अनुबंध का सार मोक्ष नहीं है।"
					},
					"type": "speech",
					"speaker": "lin"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						4,
						2
					],
					"action": "enter",
					"duration_ms": 500,
					"speaker": "lin",
					"type": "direction"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "네가 지금 걷는 길은… 계약의 가장 깊은 심장부로 향하고 있어.",
						"english": "The path you walk now... leads to the deepest heart of the contract.",
						"japanese": "「お前が今歩む道は…契約の最も深い核心へと向かっている。」",
						"chinese": "你现在所走的道路……正通向契约最深处的心脏。",
						"french": "Le chemin que tu empruntes maintenant... mène au cœur le plus profond du contrat.",
						"spanish": "El camino que pisas ahora... te lleva al corazón más profundo del contrato.",
						"vietnamese": "Con đường ngươi đang đi... đang dẫn đến tận cùng trái tim của giao ước.",
						"thai": "เส้นทางที่เจ้ากำลังเดินอยู่ตอนนี้... กำลังนำไปสู่แกนกลางที่ลึกที่สุดของสัญญา",
						"hindi": "जो रास्ता तुम अभी चल रहे हो... वह अनुबंध के सबसे गहरे दिल की ओर ले जा रहा है।"
					},
					"type": "speech",
					"speaker": "lin"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"emotion": "sad",
					"content": {
						"korean": "돌아갈 수 없어. 한번 묶이면 모든 것을 내줘야 해.",
						"english": "There's no turning back. Once bound, you must give everything.",
						"japanese": "「引き返せない。一度縛られれば、すべてを差し出さなければならない。」",
						"chinese": "无法回头。一旦被束缚，你必须付出一切。",
						"french": "Impossible de revenir en arrière. Une fois lié, tu dois tout donner.",
						"spanish": "No hay vuelta atrás. Una vez atado, debes entregar todo.",
						"vietnamese": "Không thể quay lại. Một khi đã bị ràng buộc, ngươi phải từ bỏ mọi thứ.",
						"thai": "ไม่อาจย้อนกลับได้ เมื่อถูกผูกมัดแล้ว เจ้าต้องมอบทุกสิ่ง",
						"hindi": "वापस नहीं जा सकते। एक बार बंधने पर, तुम्हें सब कुछ देना होगा।"
					}
				},
				{
					"content": {
						"korean": "되돌릴 수 없어도 상관없어. 진실을 알아야 해.",
						"english": "It doesn't matter if it can't be undone. I must know the truth.",
						"japanese": "「元に戻せなくても構わない。真実を知らなければならない。」",
						"chinese": "即使无法挽回也无所谓。我必须知道真相。",
						"french": "Peu importe si c'est irréversible. Je dois connaître la vérité.",
						"spanish": "No importa si no se puede revertir. Debo saber la verdad.",
						"vietnamese": "Không sao nếu không thể quay lại. Ta phải biết sự thật.",
						"thai": "ไม่เป็นไรหรอกถ้ากลับไปไม่ได้ ฉันต้องรู้ความจริง",
						"hindi": "कोई फर्क नहीं पड़ता अगर इसे पूर्ववत नहीं किया जा सकता। मुझे सच्चाई जाननी होगी।"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "그 진실이 너를 파멸로 이끌지도 몰라. 그래도 괜찮겠나?",
						"english": "That truth might lead you to ruin. Are you still willing?",
						"japanese": "その真実が君を破滅に導くかもしれない。それでも構わないか？",
						"chinese": "那个真相可能会把你引向毁灭。你确定还要继续吗？",
						"french": "Cette vérité pourrait te mener à ta perte. Es-tu prêt(e) à l'affronter ?",
						"spanish": "Esa verdad podría llevarte a la ruina. ¿Aún así, estás dispuesto(a)?",
						"vietnamese": "Sự thật đó có thể dẫn ngươi đến diệt vong. Ngươi vẫn chấp nhận chứ?",
						"thai": "ความจริงนั้นอาจนำพาเจ้าไปสู่หายนะ เจ้ายังต้องการจะรู้หรือไม่?",
						"hindi": "वह सच तुम्हें विनाश की ओर ले जा सकता है। क्या तुम अभी भी तैयार हो?"
					},
					"type": "speech",
					"speaker": "lin"
				}
			]
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "무의미하다… 너는 그저… 또 다른 계약을 맺었을 뿐.",
						"english": "Meaningless... You've merely... formed another pact.",
						"japanese": "無意味だ… お前はただ… 別の契約を結んだに過ぎない。",
						"chinese": "毫无意义……你只不过……又缔结了一个契约而已。",
						"french": "C'est futile… Tu n'as fait que… conclure un autre contrat.",
						"spanish": "Es inútil… Solo… has hecho otro pacto.",
						"vietnamese": "Vô nghĩa thôi… Ngươi chỉ… vừa lập thêm một giao ước khác.",
						"thai": "ไร้ความหมาย... เจ้าเพียงแค่... สร้างพันธสัญญาอื่นเท่านั้น",
						"hindi": "व्यर्थ है… तुमने बस… एक और अनुबंध किया है।"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "이것이 너의 구원이라 착각하겠지. 하지만 파멸에 더 가까워졌을 뿐.",
						"english": "You mistake this for your salvation. But you've only drawn closer to ruin.",
						"japanese": "これが救済だと錯覚するだろう。だが破滅にさらに近づいただけだ。",
						"chinese": "你会误以为这是你的救赎。然而你只是离毁灭更近了一步。",
						"french": "Tu prendras cela pour ton salut. Mais tu n'as fait que te rapprocher de ta perte.",
						"spanish": "Te equivocarás al pensar que esto es tu salvación. Pero solo te has acercado más a la ruina.",
						"vietnamese": "Ngươi sẽ lầm tưởng đây là sự cứu rỗi của mình. Nhưng ngươi chỉ càng tiến gần hơn đến diệt vong.",
						"thai": "เจ้าคงเข้าใจผิดว่านี่คือความรอดของเจ้า แต่เจ้าแค่เข้าใกล้หายนะมากขึ้นเท่านั้น",
						"hindi": "तुम्हें लगेगा कि यह तुम्हारी मुक्ति है। पर तुम विनाश के और करीब आ गए हो।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "…아직 끝난 게 아니었어.",
						"english": "...It wasn't over yet.",
						"japanese": "…まだ終わっていなかった。",
						"chinese": "……还没结束。",
						"french": "…Ce n'était pas encore fini.",
						"spanish": "…Aún no había terminado.",
						"vietnamese": "…Vẫn chưa kết thúc.",
						"thai": "...ยังไม่จบ",
						"hindi": "…यह अभी खत्म नहीं हुआ था।"
					}
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "정체 모를 그림자는 사라졌지만, 그 잔상은 사라지지 않았다.",
						"english": "The mysterious shadow vanished, but its afterimage remained.",
						"japanese": "正体不明の影は消えたが、その残像は消えなかった。",
						"chinese": "身份不明的影子消失了，但它的残影并未消散。",
						"french": "L'ombre inconnue a disparu, mais son empreinte subsistait.",
						"spanish": "La sombra desconocida desapareció, pero su resquicio permaneció.",
						"vietnamese": "Bóng ma vô danh biến mất, nhưng dư ảnh của nó vẫn còn.",
						"thai": "เงาปริศนาหายไป แต่ภาพติดตายังคงอยู่",
						"hindi": "अज्ञात छाया तो गायब हो गई, पर उसकी परछाई नहीं मिटी।"
					}
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "도시에 얽힌 거대한 계약은 여전히 존재했고, 그들은 더 깊은 곳으로 향했다.",
						"english": "The massive pact binding the city still existed, and they headed deeper.",
						"japanese": "都市に絡みつく巨大な契約は依然として存在し、彼らはさらに深い場所へと向かった。",
						"chinese": "缠绕着城市的巨大契约依然存在，他们前往了更深之处。",
						"french": "L'immense contrat qui liait la ville existait toujours, et ils s'enfoncèrent plus profondément.",
						"spanish": "El enorme pacto que ataba a la ciudad aún existía, y ellos se dirigieron a un lugar más profundo.",
						"vietnamese": "Giao ước khổng lồ ràng buộc thành phố vẫn tồn tại, và họ tiến sâu hơn.",
						"thai": "พันธสัญญาอันยิ่งใหญ่ที่ผูกมัดเมืองยังคงอยู่ และพวกเขามุ่งหน้าสู่เบื้องลึกกว่าเดิม",
						"hindi": "शहर से बंधा विशाल अनुबंध अभी भी मौजूद था, और वे और गहराई में चले गए।"
					},
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "계약은… 너희에게 질서를 가르친다.",
						"english": "The Covenant... teaches you order.",
						"japanese": "契約は… お前たちに秩序を教える。",
						"chinese": "契约……教导你们秩序。",
						"french": "Le Contrat… vous enseigne l'ordre.",
						"spanish": "El Pacto… os enseña el orden.",
						"vietnamese": "Giao ước… dạy cho các ngươi trật tự.",
						"thai": "พันธสัญญา... สอนระเบียบวินัยแก่เจ้า",
						"hindi": "अनुबंध… तुम्हें व्यवस्था सिखाता है।"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "저항은 무의미하다. 모든 것은 서약 아래 존재한다.",
						"english": "Resistance is futile. All exists under the Covenant.",
						"japanese": "抵抗は無意味だ。全ては誓約の下に存在する。",
						"chinese": "反抗毫无意义。万物皆在誓约之下。",
						"french": "Toute résistance est futile. Tout existe sous le Serment.",
						"spanish": "La resistencia es inútil. Todo existe bajo el Pacto.",
						"vietnamese": "Chống cự là vô nghĩa. Mọi thứ tồn tại dưới Lời Thề.",
						"thai": "การต่อต้านไร้ความหมาย ทุกสิ่งดำรงอยู่ภายใต้พันธสัญญา",
						"hindi": "प्रतिरोध व्यर्थ है। सब कुछ शपथ के अधीन मौजूद है।"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "우린 서약의 노예가 되지 않아!",
						"english": "We won't be slaves to the Covenant!",
						"japanese": "我々は誓約の奴隷にはならない！",
						"chinese": "我们不会成为誓约的奴隶！",
						"french": "Nous ne serons pas les esclaves du Serment !",
						"spanish": "¡No seremos esclavos del Pacto!",
						"vietnamese": "Chúng ta sẽ không làm nô lệ cho Lời Thề!",
						"thai": "เราจะไม่เป็นทาสของพันธสัญญา!",
						"hindi": "हम शपथ के गुलाम नहीं बनेंगे!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "하찮은 저항이군. 너는 결국 이 족쇄를 벗지 못한다.",
						"english": "A pathetic resistance. You'll never break free of these shackles.",
						"japanese": "くだらない抵抗だな。お前は結局、この足枷を外せない。",
						"chinese": "真是可悲的抵抗。你终究无法摆脱这桎梏。",
						"french": "Résistance futile. Tu ne te libéreras jamais de ces chaînes.",
						"spanish": "Una resistencia insignificante. Al final, no podrás quitarte estos grilletes.",
						"vietnamese": "Một sự kháng cự hèn mọn. Ngươi rốt cuộc sẽ không thể thoát khỏi xiềng xích này.",
						"thai": "การต่อต้านที่ไร้ค่า เจ้าไม่มีทางหลุดพ้นจากพันธนาการนี้ได้",
						"hindi": "तुच्छ प्रतिरोध। तुम अंततः इन बेड़ियों से मुक्त नहीं हो पाओगे।"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "계약의 힘 앞에서 무릎 꿇어라.",
						"english": "Kneel before the contract's power.",
						"japanese": "契約の力の前にひざまずけ。",
						"chinese": "在契约之力面前下跪吧。",
						"french": "Agenouillez-vous devant le pouvoir du contrat.",
						"spanish": "Arrodíllate ante el poder del contrato.",
						"vietnamese": "Quỳ gối trước sức mạnh của khế ước.",
						"thai": "คุกเข่าลงต่อหน้าพลังแห่งสัญญา",
						"hindi": "अनुबंध की शक्ति के सामने घुटने टेको।"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…아직 포기 못 해. 이 족쇄를 끊어버릴 거야.",
						"english": "...I won't give up yet. I'll break these chains.",
						"japanese": "…まだ諦めない。この足枷を断ち切る！",
						"chinese": "...我还没放弃。我要挣断这些枷锁。",
						"french": "...Je ne peux pas encore abandonner. Je briserai ces chaînes.",
						"spanish": "...Todavía no puedo rendirme. Romperé estas cadenas.",
						"vietnamese": "...Tôi chưa thể bỏ cuộc. Tôi sẽ phá tan xiềng xích này.",
						"thai": "...ยังยอมแพ้ไม่ได้ ฉันจะทำลายโซ่ตรวนนี้ให้ได้",
						"hindi": "...मैं अभी हार नहीं मान सकता। मैं इन बेड़ियों को तोड़ दूँगा।"
					},
					"emotion": "angry"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"도시의 심장부. 모든 거래가 이루어지는 곳.",
			"그곳에서 린은 종이 더미 속에서 진실을 찾고 있었다.",
			"그러나 종이에는 잉크보다 깊은 구속이 스며 있었다.",
			"자유는 대가 없는 허상에 불과했다."
		],
		"english": [
			"The city's heart. Where all transactions take place.",
			"There, Lynn sought truth amidst piles of paper.",
			"But the papers held a deeper constraint than mere ink.",
			"Freedom was merely an illusion without a price."
		],
		"japanese": [
			"街の中心部。全ての取引が行われる場所。",
			"そこで、リンは紙の山の中から真実を探していた。",
			"しかし、紙にはインクよりも深い束縛が染み込んでいた。",
			"自由は代償のない虚像に過ぎなかった。"
		],
		"chinese": [
			"城市的中心。所有交易发生的地方。",
			"在那里，琳在堆积如山的文件中寻找真相。",
			"然而，纸张中渗透着比墨水更深的束缚。",
			"自由只不过是无需代价的虚假幻象。"
		],
		"french": [
			"Le cœur de la ville. Là où toutes les transactions ont lieu.",
			"Là, Lynn cherchait la vérité au milieu des piles de papiers.",
			"Mais les papiers contenaient une contrainte plus profonde que l'encre.",
			"La liberté n'était qu'une illusion sans prix."
		],
		"spanish": [
			"El corazón de la ciudad. Donde todas las transacciones tienen lugar.",
			"Allí, Lynn buscaba la verdad entre montones de papeles.",
			"Pero los papeles contenían una atadura más profunda que la tinta.",
			"La libertad era solo una ilusión sin precio."
		],
		"vietnamese": [
			"Trung tâm thành phố. Nơi mọi giao dịch diễn ra.",
			"Ở đó, Lynn tìm kiếm sự thật giữa đống giấy tờ.",
			"Nhưng trong giấy tờ, có một sự ràng buộc sâu sắc hơn cả mực in.",
			"Tự do chỉ là một ảo ảnh không giá trị."
		],
		"thai": [
			"ใจกลางเมือง ที่ซึ่งการค้าทั้งหมดเกิดขึ้น",
			"ณ ที่นั้น ลินน์ค้นหาความจริงท่ามกลางกองเอกสาร",
			"ทว่าในกระดาษกลับแทรกซึมด้วยพันธนาการที่ลึกซึ้งกว่าหมึก",
			"อิสรภาพเป็นเพียงภาพลวงตาที่ไร้ค่า"
		],
		"hindi": [
			"शहर का दिल। जहाँ सभी लेन-देन होते हैं।",
			"वहीं, लिन कागज़ के ढेरों में सच्चाई तलाश रही थी।",
			"लेकिन कागज़ों में स्याही से भी गहरा बंधन समाया हुआ था।",
			"आज़ादी सिर्फ़ एक बिना कीमत का भ्रम थी।"
		]
	}
} as const;
